interface Permission {
  RoleId?: string;
  FunctionId?: string;
  Role?: unknown;
  Function?: unknown;
}

interface ResPermissionsApi extends Res {
  data: Permission[];
}

interface CustomPermissionState {
  loading: boolean;
  currentRequestId?: string;
  error?: string;
  permissions?: Permission[]; 
  currentUserPermissions?: Permission[];
}
