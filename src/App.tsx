import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "constants/paths";
import { useAppDispatch } from "store/index";
import { currentUser } from "store/user/action";
import "./styles/styles.css";

const Loading = React.lazy(() => import("components/Loading/Loading"));
const ErrorBoundary = React.lazy(() => import("./ErrorBoundary"));
const MainLayout = React.lazy(() => import("layouts/MainLayout"));
const PrivateRoute = React.lazy(() => import("routes/PrivateRoute"));
const Login = React.lazy(() => import("pages/Login"));

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ErrorBoundary fallback={<p>Custom fallback for this specific area.</p>}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="*" element={<MainLayout />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
