interface AppState {
  isAuthenticated: boolean;
  closeSideNav: boolean;
}

interface AppRoute<TPath, TPermission> {
  path: TPath;
  element: LazyExoticComponent<() => Element>;
  srcImg: string;
  name: string;
  permissions?: TPermission;
}
