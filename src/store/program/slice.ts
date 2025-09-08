import { createSlice } from "@reduxjs/toolkit";
import { getPrograms } from "./action";

const initialState: ProgramState = {
  loading: false,
  currentRequestId: undefined,
  error: undefined,
  programs: undefined,
  getProgramReq: {
    keyword: "",
    page: 1,
    size: 10,
  }
};

export const typeSlice = createSlice({
  name: "Program",
  initialState,
  reducers: {
    updateGetTypeReq: (state, action) => {
      state.getProgramReq = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPrograms.pending, (state, action) => {
      if (state.loading === false) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getPrograms.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      const data = action.payload;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.currentRequestId = undefined;
        state.programs = data;
      }
    });
    builder.addCase(getPrograms.rejected, (state, action) => {
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
