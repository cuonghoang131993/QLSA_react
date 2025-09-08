import { PERMISSIONS } from "constants/permissions";
import { useAppSelector } from "store/index";
import { selectCurrentUserPermissionsList } from "store/permission/selector";
import { isRoutePermitted } from "utils/permissions";

const usePermissions = (
  permissions: (typeof PERMISSIONS)[keyof typeof PERMISSIONS][]
) => {
  const currentUserPermissions = useAppSelector(selectCurrentUserPermissionsList);

  if (!permissions) return true;

  return isRoutePermitted(
    permissions,
    currentUserPermissions?.Items?.map((c) => c.FunctionId ?? '') ?? []
  );
};

export default usePermissions;
