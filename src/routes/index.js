import { parseRoutePath } from "../utils/parseRoutePath.js";
import { projects } from "./projects.js";
import { tasks } from "./tasks.js";

export const routes = [...projects, ...tasks].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
