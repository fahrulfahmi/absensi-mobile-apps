import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../featured/auth/userSlice';
// import attendanceReducer from '../features/attendance/attendanceSlice';
// import profileReducer from '../features/profile/profileSlice';

const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export default store;
