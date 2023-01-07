import { configureStore } from '@reduxjs/toolkit';
import authSlices from './slices/auth';

export default configureStore({
  reducer: {
    user: authSlices,
  },
});
