const express=require('express');
const path=require('path');
const app=express();  //express 애플리케이션 객체 생성
const static=require('serve-static');  //정적 파일 제공 미들웨어
const bodyParser=require('body-parser'); 
app.use(bodyParser.urlencoded({extended:false}));  //body-parser 등록(폼 데이터 처리)
app.use(bodyParser.json());
app.use('/',static(path.join(__dirname,'public'))); //정적 파일 제공

//요청 처리 미들웨어
app.use(function(req,res,next){
    const paramID=req.body.id||req.query.id;  //id 파라미터 가져오기
    const paramPassWd=req.body.password||req.query.password;  //password 파라미터 가져오기
    res.status(200).send(
        `<h1>서버에서 응답한 결과</h1>
        <div><p>Parm id: ${paramID}</p></div>
        <div><p>Parm passwd: ${paramPassWd}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>`
    );
    next();
});
app.listen(3000);