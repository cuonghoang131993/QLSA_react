import { createTypedDraftSafeSelector } from "..";

export const selectLoading = createTypedDraftSafeSelector(
  (state: RootState) => state.program,
  (program: ProgramState) => program.loading
);

export const selectError = createTypedDraftSafeSelector(
  (state: RootState) => state.program,
  (program: ProgramState) => program.error
);

export const selectPrograms = createTypedDraftSafeSelector(
  (state: RootState) => state.program,
  (program: ProgramState) => program.programs
);

export const selectGetProgramReq = createTypedDraftSafeSelector(
  (state: RootState) => state.program,
  (program: ProgramState) => program.getProgramReq
);
