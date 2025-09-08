import { createTypedDraftSafeSelector } from "..";

export const selectLoading = createTypedDraftSafeSelector(
  (state: RootState) => state.user,
  (user: UserState) => user.loading,
)

export const selectError = createTypedDraftSafeSelector(
  (state: RootState) => state.user,
  (user: UserState) => user.error,
)