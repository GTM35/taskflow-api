import { randomInt } from "node:crypto";

export function create(request, response) {
  const { name, description, owner } = request.body;

  const project = {
    id: randomInt(100),
    name,
    description,
    owner,
    create,
  };

  return response.end(JSON.stringify(project));
}
