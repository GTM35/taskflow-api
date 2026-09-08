import { routes } from "../routes/index.js";
import { DatabaseProjects } from "../database/dbProjects.js";
import { DatabaseTasks } from "../database/dbTasks.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const dbProjects = new DatabaseProjects();
const dbTasks = new DatabaseTasks();

export function RouteHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);

    const { query, ...params } = routeParams.groups;

    request.params = params;
    request.query = query ? extractQueryParams(query) : {};

    return route.controller({ request, response, dbProjects, dbTasks });
  }

  return response.writeHead(404).end();
}
