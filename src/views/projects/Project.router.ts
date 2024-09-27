import React from "react";
import { IDefaultRouter } from "../../interfaces/IDefaultRouter";

const routes: IDefaultRouter[] = [
  {
    path: "/projects",
    exact: true,
    name: "Project",
    component: React.lazy(() => import("./Project")),
  },
];

export default routes;
