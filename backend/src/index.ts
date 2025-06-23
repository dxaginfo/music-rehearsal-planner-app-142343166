import 'express-async-errors';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFoundHandler';
import { config } from './config';
import { logger } from './utils/logger';
import { setupRoutes } from './routes';
import { socketHandlers } from './socket';

// Initialize Prisma client
export const prisma = new PrismaClient();

// Create Express app
const app = express();

// Create HTTP server and Socket.io server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: config.corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  },
});

// Set up Socket.io
socketHandlers(io);

// Middleware
app.use(cors({ origin: config.corsOrigin, credentials: true }));
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up API routes
setupRoutes(app);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
server.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});

// Handle graceful shutdown
const shutdown = async () => {
  logger.info('Shutting down server...');
  await prisma.$disconnect();
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

export default server;