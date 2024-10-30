import React from "react";
import { IDefaultRouter } from "../../interfaces/IDefaultRouter";

const routes: IDefaultRouter[] = [
  {
    path: "/others",
    exact: true,
    name: "Others",
    component: React.lazy(() => import("./Others")),
  },
];

export default routes;
