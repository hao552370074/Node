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

var http = require('http');
http.createServer((request, response)=> {
  response.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'},);
  response.write("<head><meta charset='UTF-8'></head>")
  response.end('Update');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');


