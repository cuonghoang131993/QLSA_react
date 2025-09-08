interface Permission {
  RoleId?: string;
  FunctionId?: string;
  Role?: unknown;
  Function?: unknown;
}

interface ResPermissionsApi extends Res {
  data?: PagingRes<Permission>;
}

interface CustomPermissionState {
  permissions: {
    loading: boolean;
    currentRequestId?: string;
    error?: string;
    data?: PagingRes<Permission>;
  };
  currentUserPermissions: {
    loading: boolean;
    currentRequestId?: string;
    error?: string;
    data?: PagingRes<Permission>;
  };
}
