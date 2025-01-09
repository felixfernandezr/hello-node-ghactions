const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Export a function to start the server
const startServer = () => {
  return server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });
};

module.exports = { startServer, server };