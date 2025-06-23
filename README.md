# Rehearsal Scheduler

A comprehensive web application designed to streamline the process of scheduling band rehearsals, sending automated reminders, tracking attendance, and suggesting optimal rehearsal times based on band member availability.

## 🎵 Features

### User Management
- Band/group profile creation and management
- Member invitation system with role-based permissions
- Instrument and member priority tracking

### Availability Management
- Individual availability calendar with recurring patterns
- Conflict visualization and resolution
- Integration with external calendars (Google, Apple, Outlook)

### Smart Scheduling
- Algorithm to find optimal rehearsal times based on member availability
- Prioritization based on member importance
- Drag-and-drop scheduling interface

### Notification System
- Automated rehearsal reminders via email, SMS, or push notifications
- Schedule change alerts
- Custom notification preferences

### Attendance Tracking
- RSVP functionality for rehearsals
- Attendance history and statistics
- Absence management and reporting

### Venue & Equipment Management
- Rehearsal location management
- Equipment checklist and assignment
- Venue availability tracking

### Mobile Responsive Design
- Full functionality across all devices
- Touch-friendly interface
- Offline capability for basic functions

## 🚀 Technology Stack

### Frontend
- React with TypeScript
- Redux Toolkit for state management
- Material-UI component library
- FullCalendar.js for calendar interface
- D3.js for availability visualization

### Backend
- Node.js with Express
- JWT authentication with OAuth2 integration
- Prisma ORM for database access
- Socket.io for real-time updates

### Database
- PostgreSQL for primary data storage
- Redis for caching and real-time features

### DevOps
- Docker for containerization
- AWS deployment (ECS, RDS, S3)
- CI/CD with GitHub Actions
- Monitoring with AWS CloudWatch

## 🏗️ Architecture

The application follows a modern microservices architecture:

1. **Client Layer**: React SPA with PWA capabilities
2. **API Gateway**: Handles routing, validation, rate limiting
3. **Service Layer**:
   - User Service
   - Scheduling Service
   - Notification Service
   - Analytics Service
4. **Data Layer**: PostgreSQL, Redis, S3
5. **External Integrations**: Calendar APIs, Email/SMS providers, Maps

## 📋 Getting Started

### Prerequisites
- Node.js (v18+)
- Docker and Docker Compose
- PostgreSQL (v14+)
- Redis (v6+)

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/music-rehearsal-planner-app-142343166.git
cd music-rehearsal-planner-app-142343166
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
```bash
# Copy environment examples
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit the .env files with your configuration
```

4. Run the development environment
```bash
# Start the backend
cd backend
npm run dev

# Start the frontend (in another terminal)
cd frontend
npm start
```

5. Access the application at `http://localhost:3000`

### Docker Deployment

For production deployment, use Docker:

```bash
docker-compose up -d
```

## 🧪 Testing

Run tests with:

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# E2E tests
npm run test:e2e
```

## 📊 Database Schema

The database structure includes the following key tables:

- **Users**: User authentication and profile data
- **Groups**: Band/ensemble information
- **GroupMembers**: Linking users to groups with roles
- **Availability**: Regular availability patterns
- **SpecificAvailability**: One-time availability exceptions
- **Venues**: Rehearsal locations
- **Rehearsals**: Scheduled rehearsal events
- **Attendance**: Tracking who attended which rehearsals
- **Equipment**: Gear needed for rehearsals

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Project Demo](https://rehearsal-scheduler-demo.example.com)
- [API Documentation](https://rehearsal-scheduler-api-docs.example.com)
- [Project Board](https://github.com/dxaginfo/music-rehearsal-planner-app-142343166/projects/1)

## 📞 Contact

For questions or support, please email [support@rehearsal-scheduler.example.com](mailto:support@rehearsal-scheduler.example.com)