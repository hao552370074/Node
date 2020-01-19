let http=require('http');

let test=http.createServer();


test.on('request',(request,response)=>{
    let url=request.url;
    console.log(url);
    
    
})

test.listen(9999,()=>{
    console.log('"以http://127.0.0.1:9999 访问"');
    
})