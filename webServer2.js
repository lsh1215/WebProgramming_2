const http = require("http"); //모듈을 가져온다
const fs = require("fs");
const port = 3000;
//서버 생성
const server = http.createServer();
server.on("request", (req, res) => {
  const filename = "prac10-5.html";
  //비동기식 I/O
  fs.readFile(filename, (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (err != null) res.write("<h1>no file</h1>");
    else res.write(data);
    res.end();
  });
});
//포트 오픈
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
