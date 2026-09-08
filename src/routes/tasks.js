import { create } from "../controller/tasks/create.js";
import { index } from "../controller/tasks/index.js";
import { update } from "../controller/tasks/update.js";

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
  {
    method: "PUT",
    path: "/tasks/:id",
    controller: update,
  },
];
