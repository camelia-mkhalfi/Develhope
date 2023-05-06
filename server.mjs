import {createServer} from "node:http";

const server = createServer((request, response) => {
    console.log("request received");
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const jsonResponseBody = JSON.stringify({location: "Earth"});
    //response.end("<html><body><h1>This page was served with Node.js!</h1></body></html>");
    response.end(jsonResponseBody);

});

server.listen(3000, ()=>{
    console.log(`Server running at http://localhost:3000`);
});