export function remove(request, response, database) {
  const { id } = request.params;

  database.delete("projects", id);

  response.end();
}
