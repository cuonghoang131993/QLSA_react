import React, { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectError, selectLoading } from "store/user/selector";
import { login } from "store/user/action";
import { selectIsAuthenticated } from "store/app/selector";
import { PATH } from "constants/paths";

const Login = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") ?? PATH.DASHBOARD;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!loading) {
      const payload: ReqLogin = { username, password };
      dispatch(login(payload));
    }
  };

  if (!loading && isAuthenticated) {
    return <Navigate to={returnUrl ?? PATH.DASHBOARD} replace />;
  }

  return (
    <div className="container mx-auto">
      <div className="min-h-screen flex items-center">
        <div className="w-1/2 mx-auto">
          <form
            className="p-5 rounded-sm shadow text-center"
            onSubmit={submit}
          >
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
              Login
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
              Please enter your login and password!
            </p>
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsername}
              className="form-control form-control-lg mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              className="form-control form-control-lg mb-4"
            />
            {error && (
              <div className="mb-3 text-danger text-xl-center">{error}</div>
            )}
            <button
              type="submit"
              className="btn btn-block bg-main-600 text-white btn-lg"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
