import { create } from "../controller/projects/create.js";
import { index } from "../controller/projects/index.js";
import { remove } from "../controller/projects/remove.js";
import { update } from "../controller/projects/update.js";

export const projects = [
  {
    method: "POST",
    path: "/projects",
    controller: create,
  },

  {
    method: "GET",
    path: "/projects",
    controller: index,
  },

  {
    method: "PUT",
    path: "/projects/:id",
    controller: update,
  },
  {
    method: "DELETE",
    path: "/projects/:id",
    controller: remove,
  },
];
