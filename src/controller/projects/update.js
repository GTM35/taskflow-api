export function update(request, response, database) {
  const { id } = request.params;

  const { name, description, owner } = request.body;

  database.update("projects", id, {
    name,
    description,
    owner,
  });

  return response.end();
}
