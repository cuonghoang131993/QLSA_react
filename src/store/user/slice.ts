import { createSlice } from "@reduxjs/toolkit";
import { currentUser, login } from "./action";

const initialState: UserState = {
  loading: false,
  currentRequestId: undefined,
  error: undefined,
  currentUser: undefined,
};

export const loginSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      if (state.loading === false) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { requestId } = action.meta;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      const { requestId } = action.meta;
      console.log(action.payload)

      if (state.loading === true || state.currentRequestId === requestId) {
        state.loading = false;
        state.error = action.error.message;
      }
    });

    builder.addCase(currentUser.pending, (state, action) => {
      if (state.loading === false) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(currentUser.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const currentUser = action.payload;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.currentRequestId = undefined;
        state.currentUser = currentUser;
      }
    });
    builder.addCase(currentUser.rejected, (state, action) => {
      const { requestId } = action.meta;

      if (state.loading === true || state.currentRequestId === requestId) {
        state.loading = false;
        state.error = action.error.message;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const actions = loginSlice.actions;

export default loginSlice.reducer;
