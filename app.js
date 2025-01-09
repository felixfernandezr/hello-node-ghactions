const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Start the server if this file is executed directly
if (require.main === module) {
  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });
}

module.exports = server;