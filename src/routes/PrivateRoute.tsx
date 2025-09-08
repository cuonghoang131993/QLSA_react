import { Navigate, Outlet, useLocation } from "react-router";
import { PATH } from "constants/paths";
import { selectIsAuthenticated } from "store/app/selector";
import { selectLoading } from "store/user/selector";
import Loading from "components/Loading/Loading";
import { useAppSelector } from "store/index";

const PrivateRoute = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectLoading);
  const location = useLocation();

  if (loading) return <Loading />;

  if (!loading && !isAuthenticated) {
    return <Navigate to={`${PATH.LOGIN}?returnUrl=${location.pathname}`} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
