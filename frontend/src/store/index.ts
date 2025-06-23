import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import groupsReducer from './slices/groupsSlice';
import schedulesReducer from './slices/schedulesSlice';
import venuesReducer from './slices/venuesSlice';
import usersReducer from './slices/usersSlice';
import availabilityReducer from './slices/availabilitySlice';
import notificationsReducer from './slices/notificationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    groups: groupsReducer,
    schedules: schedulesReducer,
    venues: venuesReducer,
    users: usersReducer,
    availability: availabilityReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable date objects in state
        ignoredActions: ['availability/setAvailabilityPatterns'],
        ignoredPaths: ['availability.patterns'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;