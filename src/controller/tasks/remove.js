export function remove({ request, response, dbTasks }) {
  const { id } = request.params;

  dbTasks.remove("tasks", parseInt(id));

  response.end();
}
