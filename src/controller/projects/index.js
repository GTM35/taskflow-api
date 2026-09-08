export function index({ request, response, dbProjects }) {
  const projects = dbProjects.select("projects");

  return response.end(JSON.stringify(projects));
}
