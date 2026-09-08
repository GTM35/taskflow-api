import { randomInt } from "node:crypto";

export function create(request, response, database) {
  const { name, description, owner } = request.body;

  const project = {
    id: randomInt(100),
    name,
    description,
    owner,
    create,
  };

  database.insert("projects", project);

  return response.writeHead(201).end();
}
