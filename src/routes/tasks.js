import { create } from "../controller/tasks/create.js";

export const tasks = [
  {
    method: "POST",
    path: "/tasks",
    controller: create,
  },
];
