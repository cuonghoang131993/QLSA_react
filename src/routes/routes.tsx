import React from "react";
import { PATH } from "constants/paths";
import HomeIcon from "assets/images/home.svg";
import ListIcon from "assets/images/list.svg";
import OpenMenuIcon from "assets/images/open-menu.svg";
import { PERMISSIONS } from "constants/permissions";

const Dashboard = React.lazy(() => import("pages/Dashboard"));
const TypesPage = React.lazy(() => import("pages/Types"));
const ProgramsPage = React.lazy(() => import("pages/Programs"));

const routes: AppRoute<
  (typeof PATH)[keyof typeof PATH],
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS][]
>[] = [
  {
    path: PATH.DASHBOARD,
    element: Dashboard,
    srcImg: HomeIcon,
    name: "Trang chủ",
    permissions: [PERMISSIONS.REPORT],
  },
  {
    path: PATH.TYPES,
    element: TypesPage,
    srcImg: OpenMenuIcon,
    name: "Kiểu thực phẩm",
    permissions: [PERMISSIONS.PROGRAM_TYPE],
  },
  {
    path: PATH.PROGRAMS,
    element: ProgramsPage,
    srcImg: ListIcon,
    name: "Chế độ dinh dưỡng",
    permissions: [PERMISSIONS.PROGRAM],
  },
];

export default routes;
