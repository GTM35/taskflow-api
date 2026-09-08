import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { RouteHandler } from "./middlewares/routeHandler.js";

async function listener(request, response) {
  await jsonHandler(request, response);

  RouteHandler(request, response);
}

http.createServer(listener).listen(3333);
