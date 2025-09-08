import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUserApi, loginApi, logoutApi } from "services/user.api";
import { loginSuccess, logout as LogoutSuccess } from "store/app/slice";

export const login = createAsyncThunk(
  "user/login",
  async (
    payload: ReqLogin,
    { dispatch, getState, requestId }
  ) => {
    const { loading, currentRequestId } = (getState() as RootState).user;
    if (!loading || requestId !== currentRequestId) {
      return;
    }
    await loginApi(payload);

    dispatch(loginSuccess());

    return {};
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await logoutApi();

      dispatch(LogoutSuccess());

      return {};
    } catch (_) {
      rejectWithValue("Something went wrong!");
    }
  }
);

export const currentUser = createAsyncThunk(
  "user/currentUser",
  async (_, { dispatch, requestId, getState, rejectWithValue }) => {
    try {
      const { loading, currentRequestId } = (getState() as RootState).user;
      if (!loading || requestId !== currentRequestId) {
        return;
      }

      const response = await currentUserApi();

      dispatch(loginSuccess());

      return response.data;
    } catch (_) {
      rejectWithValue("Something went wrong!");
    }
  }
);
