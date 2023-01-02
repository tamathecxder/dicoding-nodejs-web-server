const http = require('http');

/**
 * Logikan untuk menangani dan menganggapi request dituliskan pada fungsi ini
 * 
 * @param request: object yang berisikan informasi terkait permintaan
 * @param response: object yang digunakan untuk menanggapi permintaan 
 */

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');

  response.statusCode = 200;
  response.end('<h1>Halo, HTTP Server!</h1>');
}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});