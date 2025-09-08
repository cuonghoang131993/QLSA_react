import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProgramsApi } from "services/program.api";

export const getPrograms = createAsyncThunk(
  "program/getPrograms",
  async (
    payload: PagingReq,
    { getState, requestId, rejectWithValue }
  ) => {
    try {
      const { loading, currentRequestId } = (getState() as RootState).program;

      if (!loading || requestId !== currentRequestId) {
        return;
      }
      
      const response = await getProgramsApi(payload);

      return response?.data;
    } catch (_) {
      rejectWithValue("Fetching failed!");
    }
  }
);
