// app.js
const express = require('express');
const app = express();
const port = 3000; // 원하는 포트 번호로 변경 가능

app.use(function(req, res, next) {
     const userAgent = req.headers['user-agent'];
     const paramName = req.query.name;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>미들웨어 테스트</h1>');
    res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);
    res.write(`<div><p>Param name: ${paramName}</p></div>`);
    res.end();
});

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행 중...`);
});

