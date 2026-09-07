import http from "node:http";

async function listener(request, response) {
  response.end("Hello World!");
}

http.createServer(listener).listen(3333);
