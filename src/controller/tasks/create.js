export function create({ request, response, dbTasks }) {
  const task = request.body;

  const insert = dbTasks.insert("tasks", task);

  if (insert === false) {
    response.writeHead(404).end("Projeto não existe!");
  } else {
    response.end("Tarefa criada!");
  }
}
