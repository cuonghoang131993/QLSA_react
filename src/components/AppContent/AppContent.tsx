import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATH } from "constants/paths";
import routes from "routes/routes";
import Loading from "../Loading/Loading";
import { useAppSelector } from "store/index";
import {
  selectCurrentUserPermissionsList,
  selectCurrentUserPermissionsLoading,
} from "store/permission/selector";
import { isRoutePermitted } from "utils/permissions";

const AppContent = () => {
  const loadingPermissions = useAppSelector(selectCurrentUserPermissionsLoading);
  const currentUserPermissions = useAppSelector(selectCurrentUserPermissionsList);

  if (loadingPermissions && !currentUserPermissions) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes
          .filter((route) =>
            isRoutePermitted(
              route.permissions ?? [],
              currentUserPermissions?.Items?.map((r) => r.FunctionId ?? "") ?? []
            )
          )
          .map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            );
          })}
        <Route
          path={PATH.DASHBOARD}
          element={<Navigate to="dashboard" replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default React.memo(AppContent);
