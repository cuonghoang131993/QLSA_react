import { PERMISSIONS } from "constants/permissions";
import { useAppSelector } from "store/index";
import { selectCurrentUserPermissions } from "store/permission/selector";
import { isRoutePermitted } from "utils/permissions";

const usePermissions = (
  permissions: (typeof PERMISSIONS)[keyof typeof PERMISSIONS][]
) => {
  const currentUserPermissions = useAppSelector(selectCurrentUserPermissions);

  if (!permissions) return true;

  return isRoutePermitted(
    permissions,
    currentUserPermissions?.map((c) => c.RoleId ?? '') ?? []
  );
};

export default usePermissions;
