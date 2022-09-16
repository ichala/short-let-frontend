import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    Login: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    isLoggedIn: () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        return user;
      }
      return null;
    },
    Logout: () => {
      localStorage.removeItem('user');
    },
  },
});

export const { Logout, Login, isLoggedIn } = authSlice.actions;

export default authSlice.reducer;
