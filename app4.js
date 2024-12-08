const express=require('express');
const app=express();  //express 애플리케이션 객체 생성
app.set('port',3000);
//서버 생성(사용)
app.get('/',(req,res)=>{  //next: 내가 작성한 다음 함수 실행
    res.status(200).send('<h1>HelloWord root</h1>');
});

//경로를 설정하여 다양한 경로를 통한 접속 구현
app.get('/login',(req,res)=>{
    res.status(200).send('<h1>Welcome to login</h1>'); 
});
app.listen(3000);