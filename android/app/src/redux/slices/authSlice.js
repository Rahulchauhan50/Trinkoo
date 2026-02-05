import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    loading: false,
    error: null,
    pendingPhone: null
  },
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
    },
    authError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPendingPhone: (state, action) => {
      state.pendingPhone = action.payload;
    }
  }
});

export const {
  authStart,
  authSuccess,
  authError,
  setPendingPhone
} = authSlice.actions;

export default authSlice.reducer;
