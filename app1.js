const express=require('express');
const app=express();  //express 애플리케이션 객체 생성
app.set('port',3000);
//서버 생성(사용)
app.use((req,res,next)=>{  //next: 내가 작성한 다음 함수 실행
    res.status(200).send('<h1>HelloWord</h1>');  //writeHead.end가 한줄로 합쳐져서 간결해짐
});
//요청을 듣는다
app.listen(app.get('port'),()=>{
    console.log('Server listening on port 3000');
});