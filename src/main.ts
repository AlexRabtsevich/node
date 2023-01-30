import http  from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const getNODE = ()=> process.env.NODE

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world!!!!\n' + getNODE());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});