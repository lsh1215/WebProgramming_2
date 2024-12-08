const http = require("http");
const port = 1000;
//서버 생성
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>LocalHost</h1>");
  res.end("<h1>Hello world</h1>");
});
//포트 오픈
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
