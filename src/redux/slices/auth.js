import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    Login: (state, action) => {
      const UserData = {
        id: action.payload.user.id,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        role: action.payload.user.role,
        jwt: action.payload.jwt,
      };
      localStorage.setItem('user', JSON.stringify(UserData));
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
