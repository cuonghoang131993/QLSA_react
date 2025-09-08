import { createTypedDraftSafeSelector } from "..";

export const selectIsAuthenticated = createTypedDraftSafeSelector(
  (state: RootState) => state.app,
  (app: AppState) => app.isAuthenticated,
)

export const selectIsCloseSideNav = createTypedDraftSafeSelector(
  (state: RootState) => state.app,
  (app: AppState) => app.closeSideNav,
)