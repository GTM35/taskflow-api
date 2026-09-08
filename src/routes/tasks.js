import { create } from "../controller/tasks/create.js";
import { index } from "../controller/tasks/index.js";
import { remove } from "../controller/tasks/remove.js";
import { update } from "../controller/tasks/update.js";
import { updateStatus } from "../controller/tasks/updateStatus.js";

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
  {
    method: "PATCH",
    path: "/tasks/:id/status",
    controller: updateStatus,
  },
  {
    method: "DELETE",
    path: "/tasks/:id",
    controller: remove,
  },
];
