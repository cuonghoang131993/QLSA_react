import { createSlice } from "@reduxjs/toolkit";

const initialState: AppState = {
  isAuthenticated: false,
  closeSideNav: false,
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    toggleSideNav: (state) => {
      state.closeSideNav = !state.closeSideNav;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logout, toggleSideNav } = appSlice.actions;

export default appSlice.reducer;
