const http = require ('node:http');
const fs = require ('node:fs');

const server = http.createServer ((req, res) => {
  res.writeHead (200, {'Content-Type': 'text/plain'});
  res.end ('Hello World');
});

server.listen (8082, () => {
  console.log ('Server running on port 8082');
});
