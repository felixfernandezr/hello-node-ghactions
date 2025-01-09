const http = require('http');
const { startServer, server } = require('./app');

// Use Jest's beforeAll and afterAll hooks to manage server lifecycle
beforeAll(() => {
  // Start the server before running the tests
  startServer();
});

// Make sure to close the server after tests to avoid hanging processes
afterAll(() => {
  server.close();
});

test('should return "Hello, World!"', (done) => {
  const request = http.get('http://localhost:3000', (response) => {
    let data = '';

    // Accumulate the data
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Assert the response content
    response.on('end', () => {
      expect(data).toBe('Hello, World!\n');
      done();  // Indicate that the test is complete
    });
  });

  request.on('error', (err) => done(err));
});
