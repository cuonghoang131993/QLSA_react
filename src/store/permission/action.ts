import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPermissionsApi, currentUserPermissionsApi } from "services/permission.api";

export const getPermissions = createAsyncThunk(
  "permission/list",
  async (_, { requestId, getState, rejectWithValue }) => {
    try {
      const { loading, currentRequestId } = (getState() as RootState).permission;
      if (!loading || requestId !== currentRequestId) {
        return;
      }

      const response = await getPermissionsApi();

      return response.data;
    } catch (error) {
      rejectWithValue("Something went wrong!");
    }
  }
);

export const currentUserPermissions = createAsyncThunk(
  "permission/currentUserPermissions",
  async (_, { requestId, getState, rejectWithValue }) => {
    try {
      const { loading, currentRequestId } = (getState() as RootState).permission;
      if (!loading || requestId !== currentRequestId) {
        return;
      }

      const response = await currentUserPermissionsApi();

      return response.data;
    } catch (error) {
      rejectWithValue("Something went wrong!");
    }
  }
);
