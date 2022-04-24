const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our story");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We couldn't find that page</p>
  <a href='/'>back home</a>
  `);
});

server.listen(5000);