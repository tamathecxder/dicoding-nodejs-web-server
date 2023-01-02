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
  
  const { method } = request;

  if (method == 'GET') {
    response.end("<h1>Kumaha Damang?</h1>");
  }

  if (method == 'POST') {
    response.end("<h1>Apa Kabar?</h1>");
  }

  if (method == 'PUT') {
    response.end("<h1>Piye Kabare?</h1>");
  }

  if (method == 'DELETE') {
    response.end("<h1>How Are You?</h1>");
  }
}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});