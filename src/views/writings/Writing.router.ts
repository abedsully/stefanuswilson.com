import React from "react";
import { IDefaultRouter } from "../../interfaces/IDefaultRouter";

const routes: IDefaultRouter[] = [
  {
    path: "/writings",
    exact: true,
    name: "Writings",
    component: React.lazy(() => import("./Writings")),
  },
];

export default routes;
