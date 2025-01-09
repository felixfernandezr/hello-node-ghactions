const http = require('http');
const server = require('./app');

test('should return "Hello, World!"', (done) => {
  // Start the server
  const request = http.get('http://localhost:3000', (response) => {
    let data = '';

    // Collect response data
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Test the response
    response.on('end', () => {
      expect(response.statusCode).toBe(200);
      expect(data).toBe('Hello, World!\n');
      done();
    });
  });

  request.on('error', (err) => done(err));
});