import React from "react";
import { IDefaultRouter } from "../../interfaces/IDefaultRouter";

const routes: IDefaultRouter[] = [
  {
    path: "/",
    exact: true,
    name: "About",
    component: React.lazy(() => import("./About")),
  },
];

export default routes;
