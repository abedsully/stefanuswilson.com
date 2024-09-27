import { IDefaultRouter } from "../interfaces/IDefaultRouter";

import routerAbout from "../views/about/About.router";
import routerProject from "../views/projects/Project.router";
import routerExperience from "../views/experience/Experience.router";
import routerWritings from "../views/writings/Writing.router";

export const routes: IDefaultRouter[] = [
    ...routerAbout,
    ...routerProject,
    ...routerExperience,
    ...routerWritings
];

export default routes;