import { createTypedDraftSafeSelector } from "..";

export const selectLoading = createTypedDraftSafeSelector(
  (state: RootState) => state.type,
  (type: TypeState) => type.loading
);

export const selectError = createTypedDraftSafeSelector(
  (state: RootState) => state.type,
  (type: TypeState) => type.error
);

export const selectTypes = createTypedDraftSafeSelector(
  (state: RootState) => state.type,
  (type: TypeState) => type.types
);

export const selectGetTypeReq = createTypedDraftSafeSelector(
  (state: RootState) => state.type,
  (type: TypeState) => type.getTypeReq
);
