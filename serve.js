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
http.createServer((request, response) => {
  let urls=url.parse(request.url).pathname
  if (urls!='/favicon.ico') {
  fs.readFile('./home.html',(error,data)=>{
    if (error) {
      let mime=mimeMoudel.getExtname(fs,urls)
      fs.readFile('./404.html',(error,data)=>{
          response.writeHead(404, { 'Content-Type': `${mime}`+';charset="UTF-8"' });
          response.write(data)
          response.end();
      })
    }else{
      let mime=mimeMoudel.getExtname(fs,urls)
      console.log(mime);
      response.writeHead(200, { 'Content-Type': `${mime}`+';charset="UTF-8"' });
      response.write(data)
      response.end();
    }
  })


  }

}).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');
