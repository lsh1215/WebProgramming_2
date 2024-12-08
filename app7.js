const express=require('express');
const app=express();  //express 애플리케이션 객체 생성
app.use(function(req,res,next){
    const userAgent=req.header('User-Agent');
    const paramName=req.query.name;
    const paramId=req.query.id;
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);
    res.write(`<div><p>Param name: ${paramName}</p></div>`);
    res.write(`<div><p>Param id: ${paramId}</p></div>`);
    res.end();
});
app.listen(3000);
