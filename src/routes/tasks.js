import { create } from "../controller/tasks/create.js";
import { index } from "../controller/tasks/index.js";

export const tasks = [
  {
    method: "POST",
    path: "/tasks",
    controller: create,
  },
  {
    method: "GET",
    path: "/tasks",
    controller: index,
  },
];
