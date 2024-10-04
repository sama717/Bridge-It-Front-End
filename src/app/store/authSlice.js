"use client";
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

// Export actions
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
