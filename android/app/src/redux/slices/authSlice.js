import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    loading: false,
    error: null,
    pendingPhone: null,
    user: null
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
    setUser: (state, action) => {
      state.user = action.payload;
      console.log('User set in auth slice:', action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.loading = false;
      state.error = null;
      state.pendingPhone = null;
      state.user = null;
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
  setPendingPhone,
  logout,
  setUser
} = authSlice.actions;

export default authSlice.reducer;
