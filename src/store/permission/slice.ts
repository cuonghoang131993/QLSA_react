import { createSlice } from "@reduxjs/toolkit";
import { getPermissions, currentUserPermissions } from "./action";

const initialState: CustomPermissionState = {
  loading: false,
  currentRequestId: undefined,
  error: undefined,
  permissions: undefined,
  currentUserPermissions: undefined,
};

export const permissionSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPermissions.pending, (state, action) => {
      if (state.loading === false) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getPermissions.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const permissions = action.payload;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.currentRequestId = undefined;
        state.permissions = permissions;
      }
    });
    builder.addCase(getPermissions.rejected, (state, action) => {
      const { requestId } = action.meta;
      console.log(action.payload)

      if (state.loading === true || state.currentRequestId === requestId) {
        state.loading = false;
        state.error = action.error.message;
      }
    });

    builder.addCase(currentUserPermissions.pending, (state, action) => {
      if (state.loading === false) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(currentUserPermissions.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const currentUserPermissions = action.payload;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.currentRequestId = undefined;
        state.currentUserPermissions = currentUserPermissions;
      }
    });
    builder.addCase(currentUserPermissions.rejected, (state, action) => {
      const { requestId } = action.meta;

      if (state.loading === true || state.currentRequestId === requestId) {
        state.loading = false;
        state.error = action.error.message;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const actions = permissionSlice.actions;

export default permissionSlice.reducer;
