import React, { useEffect } from "react";

import Header from "components/Header";
import SideNav from "components/SideNav";
import AppContent from "components/AppContent/AppContent";
import { useAppDispatch } from "store/index";
import {
  getPermissions,
  currentUserPermissions,
} from "store/permission/action";

const MainLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPermissions());
    dispatch(currentUserPermissions());
  }, [dispatch]);

  return (
    <div className="wrapper flex items-stretch">
      <SideNav />
      <main className="grow overflow-auto min-h-screen">
        <Header />
        <div className="content mt-3 p-3">
          <AppContent />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
