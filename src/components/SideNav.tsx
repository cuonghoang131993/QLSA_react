import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "react-redux";
import { selectIsCloseSideNav } from "store/app/selector";
import { twMerge } from "tailwind-merge";
import routes from "routes/routes";

const SideNav = () => {
  const closeSideNav = useAppSelector(selectIsCloseSideNav);

  return (
    <nav
      className={twMerge(
        "w-[270px] bg-main-500 text-white transition-all duration-300",
        closeSideNav ? "w-[80px] text-center" : ""
      )}
    >
      <h1>
        <a
          href="#home"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-black p-4 text-white transition duration-300"
        >
          Q
        </a>
      </h1>
      <ul className="p-0 list-unstyled mb-5 transition duration-300">
        {routes?.map((route) => {
          return (
            <li key={route.name} className="text-base">
              <NavLink
                className={
                  "h-14 py-4 px-6 flex items-center text-white border-b border-white/10 active:bg-main-600"
                }
                to={route.path}
              >
                <img
                  className="w-5 h-auto inline-block mr-4"
                  src={route.srcImg}
                  alt=""
                />
                <span className={closeSideNav ? "hidden" : ""}>
                  {route.name}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={twMerge("py-0 px-8", closeSideNav ? "hidden" : "")}>
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | This
          template is made with by
          <a
            href="https://xdevclass.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-white"
          >
            Cuong Hoang
          </a>
        </p>
      </div>
    </nav>
  );
};

export default SideNav;
