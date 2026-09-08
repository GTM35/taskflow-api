export function remove({ request, response, dbProjects }) {
  const { id } = request.params;

  dbProjects.delete("projects", id);

  response.end();
}
