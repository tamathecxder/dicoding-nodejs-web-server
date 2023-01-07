const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  
  const { method, url } = request;
  let body = [];

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end(JSON.stringify({
        message: "Ini adalah homepage"
      }));
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan ${method} request`
      }));
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      response.end(JSON.stringify({
        message: "Halo! ini adalah halaman about"
      }));
      response.statusCode = 200;
    } else if (method === 'POST') {
      request.on('data', (chunk) => {
        body.push(chunk);
      });

      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);

        response.statusCode = 200;
        response.end(JSON.stringify({
          message: `Halo, ${name}! ini adalah halaman about`
        }));
      });
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan ${method} request`
      }));
    }
  } else {
    const err = {
      message: "Halaman tidak ditemukan!"
    };
    
    response.statusCode = 404;
    response.end(JSON.stringify(err));
  }
}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});