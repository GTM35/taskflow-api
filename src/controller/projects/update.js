export function update({ request, response, dbProjects }) {
  const { id } = request.params;

  const { name, description, owner } = request.body;

  dbProjects.update("projects", id, {
    name,
    description,
    owner,
  });

  return response.end();
}
