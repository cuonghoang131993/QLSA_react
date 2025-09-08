import React from "react";
import { toggleSideNav } from "store/app/slice";
import { useAppDispatch } from "store";
import { logout } from "store/user/action";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSideNav = () => {
    dispatch(toggleSideNav());
  }

  return (
    <header className="flex bg-main-400 justify-between p-3 shadow-sm">
      <button className="btn bg-main-500" onClick={handleSideNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -53 384 384"
          width="20"
        >
          <g>
            <path
              d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              data-original="#000000"
              style={{ fill: "#FFFFFF" }}
              data-old_color="#000000"
            />
            <path
              d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              data-original="#000000"
              style={{ fill: "#FFFFFF" }}
              data-old_color="#000000"
            />
            <path
              d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              data-original="#000000"
              style={{ fill: "#FFFFFF" }}
              data-old_color="#000000"
            />
          </g>
        </svg>
      </button>
      <button onClick={handleLogout} className="btn bg-main-500 text-white">
        Logout
      </button>
    </header>
  );
};

export default Header;
