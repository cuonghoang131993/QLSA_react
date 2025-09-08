export const isRoutePermitted = (
  permissions: string[],
  currentUserPermissions: string[]
) => permissions.every((p) => currentUserPermissions.includes(p));
