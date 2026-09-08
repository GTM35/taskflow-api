export function index({ request, response, dbTasks }) {
  const tasks = dbTasks.select("tasks");

  return response.end(JSON.stringify(tasks));
}
