import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

/*HTTP/1.1 200 OK
< Content-Type: application/json
< Date: Sat, 06 May 2023 14:27:49 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 19
<
{"location":"Mars"}* Connection #0 to host localhost left intact*/