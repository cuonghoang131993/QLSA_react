import { createTypedDraftSafeSelector } from "..";

export const selectLoading = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.loading,
)

export const selectError = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.error,
)

export const selectPermissionsList = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.permissions,
)

export const selectCurrentUserPermissions = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.currentUserPermissions,
)