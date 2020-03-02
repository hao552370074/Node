// var http = require("http");

// var server = http.createServer();

// server.on("request", function(request, response) {
//   console.log("收到请求", request.url);
//   var Url = request.url;
//   if (Url === "/ss") {
//     let sObj = JSON.stringify({a: 1,b: 2,c: 3});
//     response.end(sObj);
//   } else if (Url === "/kk") {
//     // response.write("kk");
//     response.end('kk'); 
//   } else{
//     response.end('404')
//   }
// });

// server.listen(2666, function() {
//   console.log("以http://127.0.0.1:2666 访问");
// });
var fs=require('fs');
var url=require('url');
var mimeMoudel=require('./moudel');
var http = require('http');
var events=require('events');
var EventEmitter=new events.EventEmitter();

var MongoClient=require("mongodb").MongoClient;
var MongoUrl='mongodb://127.0.0.1:27017/my'


http.createServer((request, response) => {
  let urls=url.parse(request.url).pathname
  if (urls!='/favicon.ico') {
    fs.readFile('./home.html',(error,data)=>{
      if (error) {
        let mime=mimeMoudel.getExtname(fs,urls,EventEmitter)
        fs.readFile('./404.html',(error,data)=>{
          response.writeHead(404, { 'Content-Type': `${mime}`+';charset="UTF-8"' });
          response.write(data)
          response.end();
        })
      }else{
        let mime=mimeMoudel.getExtname(fs,urls,EventEmitter);
        MongoClient.connect(MongoUrl,(error,db)=>{
          if (error) {
            console.log(error);
            console.log('数据库连接失败');
            return;
          }
          db.collection('user').deleteOne({
            "name":'hao',
          },(error,result)=>{
            if (error) {
              console.log('失败');
              return;
            }
            console.log('成功');
            db.close();
            response.writeHead(200, { 'Content-Type': `${mime}`+';charset="UTF-8"' });
            // response.write(data)
            response.end(JSON.stringify(result.ops));
          })
        })
        
        EventEmitter.on('data',(data)=>{
          console.log(data);
        })
      }
    })
    
    
  }
  
}).listen(8081);



// console.log('Server running at http://127.0.0.1:8081/');
