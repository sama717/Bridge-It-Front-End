"use client";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    email: null,
    user_id: null,
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
      state.user_id = action.payload.user.user_id;
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
      state.email = null;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setuserId(state, action) {
      state.user_id = action.payload;
    },
    clearuserId(state) {
      state.user_id = null;
    },
    clearEmail(state) {
      state.email = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  setEmail,
  setuserId,
  clearuserId,
  clearEmail,
} = authSlice.actions;

export default authSlice.reducer;
