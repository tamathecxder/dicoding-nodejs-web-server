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
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('X-Powered-By', 'Node.js');
  
  const { method, url } = request;
  let body = [];

  if (url === '/') {
    // curl http://localhost:5000/
  }

  if (url === '/about') {
    // curl http://localhost:5000/about
  }
  
  if (method == 'GET') {
    response.end("<h1>Kumaha Damang?</h1>");
  }

  if (method == 'POST') {
    request.on('data', (chunk) => {
      body.push(chunk);
    });
  
    request.on('end', () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}</h1>`);
    });
  }

}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});