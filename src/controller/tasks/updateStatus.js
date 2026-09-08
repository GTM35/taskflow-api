export function updateStatus({ request, response, dbTasks }) {
  const { id } = request.params;
  const { status } = request.body;

  dbTasks.updateStatus("tasks", parseInt(id), status);

  response.end();
}
