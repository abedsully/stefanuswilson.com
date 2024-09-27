import React from "react";
import { IDefaultRouter } from "../../interfaces/IDefaultRouter";

const routes: IDefaultRouter[] = [
  {
    path: "/experience",
    exact: true,
    name: "Experience",
    component: React.lazy(() => import("./Experience")),
  },
];

export default routes;
