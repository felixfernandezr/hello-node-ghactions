const http = require('http'); // or the relevant module you're using

jest.mock('http', () => ({
  request: jest.fn(() => ({
    on: jest.fn(),
    end: jest.fn(),
  })),
}));

test('should return "Hello, World!"', (done) => {
  const request = http.request('http://example.com', (response) => {
    response.on('data', (chunk) => {
      expect(chunk.toString()).toBe('Hello, World!');
      done();
    });
  });

  request.on('error', (err) => done(err));
  request.end();
});
