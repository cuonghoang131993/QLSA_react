import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTypesApi } from "services/type.api";

export const getTypes = createAsyncThunk(
  "type/getTypes",
  async (
    payload: PagingReq,
    { getState, requestId, rejectWithValue }
  ) => {
    try {
      const { loading, currentRequestId } = (getState() as RootState).type;

      if (!loading || requestId !== currentRequestId) {
        return;
      }
      
      const response = await getTypesApi(payload);

      return response?.data;
    } catch (_) {
      rejectWithValue("Fetching failed!");
    }
  }
);
