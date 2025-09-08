import { createTypedDraftSafeSelector } from "..";

export const selectCurrentUserPermissionsLoading = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.currentUserPermissions.loading,
)

export const selectCurrentUserPermissionsError = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.currentUserPermissions.error,
)

export const selectPermissionsList = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.permissions.data,
)

export const selectCurrentUserPermissionsList = createTypedDraftSafeSelector(
  (state: RootState) => state.permission,
  (permission: CustomPermissionState) => permission.currentUserPermissions.data,
)