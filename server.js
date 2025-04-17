// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i; // simulate CPU usage
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
