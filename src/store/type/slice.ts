import { createSlice } from "@reduxjs/toolkit";
import { getTypes } from "./action";

const initialState: TypeState = {
  loading: false,
  currentRequestId: undefined,
  error: undefined,
  types: undefined,
  getTypeReq: {
    keyword: "",
    page: 1,
    size: 10,
  }
};

export const typeSlice = createSlice({
  name: "Type",
  initialState,
  reducers: {
    updateGetTypeReq: (state, action) => {
      state.getTypeReq = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTypes.pending, (state, action) => {
      if (state.loading === false) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getTypes.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const data = action.payload;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.currentRequestId = undefined;
        state.types = data;
      }
    });
    builder.addCase(getTypes.rejected, (state, action) => {
      const { requestId } = action.meta;

      if (state.loading === true || state.currentRequestId === requestId) {
        state.loading = false;
        state.error = action.error.message;
      }
    });
  },
});

export const { updateGetTypeReq } = typeSlice.actions;

export default typeSlice.reducer;
