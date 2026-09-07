import { create } from "../controller/projects/create.js";

export const projects = [
  {
    method: "POST",
    path: "/projects",
    controller: create,
  },
];
