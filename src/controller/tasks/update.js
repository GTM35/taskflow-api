export function update({ request, response, dbTasks }) {
  const data = request.body;
  const { id } = request.params;

  dbTasks.update("tasks", parseInt(id), data);

  response.end("Chegou aqui!");
}
