import { createSlice } from "@reduxjs/toolkit";
import { getPermissions, currentUserPermissions } from "./action";

const initialState: CustomPermissionState = {
  permissions: {
    loading: false,
    currentRequestId: undefined,
    error: undefined,
  },
  currentUserPermissions: {
    loading: false,
    currentRequestId: undefined,
    error: undefined,
  },
};

export const permissionSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPermissions.pending, (state, action) => {
      if (state.permissions.loading === false) {
        state.permissions.loading = true;
        state.permissions.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getPermissions.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const permissions = action.payload;

      if (state.permissions.loading === true && state.permissions.currentRequestId === requestId) {
        state.permissions.loading = false;
        state.permissions.currentRequestId = undefined;
        state.permissions.data = permissions;
      }
    });
    builder.addCase(getPermissions.rejected, (state, action) => {
      const { requestId } = action.meta;
      console.log(action.payload);

      if (state.permissions.loading === true || state.permissions.currentRequestId === requestId) {
        state.permissions.loading = false;
        state.permissions.error = action.error.message;
      }
    });

    builder.addCase(currentUserPermissions.pending, (state, action) => {
      if (state.currentUserPermissions.loading === false) {
        state.currentUserPermissions.loading = true;
        state.currentUserPermissions.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(currentUserPermissions.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const currentUserPermissions = action.payload;

      if (state.currentUserPermissions.loading === true && state.currentUserPermissions.currentRequestId === requestId) {
        state.currentUserPermissions.loading = false;
        state.currentUserPermissions.currentRequestId = undefined;
        state.currentUserPermissions.data = currentUserPermissions;
      }
    });
    builder.addCase(currentUserPermissions.rejected, (state, action) => {
      const { requestId } = action.meta;

      if (state.currentUserPermissions.loading === true || state.currentUserPermissions.currentRequestId === requestId) {
        state.currentUserPermissions.loading = false;
        state.currentUserPermissions.error = action.error.message;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const actions = permissionSlice.actions;

export default permissionSlice.reducer;
