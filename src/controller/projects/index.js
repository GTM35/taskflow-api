export function index(request, response, database) {
  const projects = database.select("projects");

  return response.end(JSON.stringify(projects));
}
