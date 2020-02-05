var G={};
var url=require('url')
var app=function(req,res) {

    if (req.url!='/favicon.ico') {
        var pathname=url.parse(req.url).pathname;
        if (!pathname.endsWith('/')) {
            pathname=pathname+'/'
        }
        console.log(pathname);
        
        if (G[pathname]) {
            G[pathname](req,res);
        }else{
            res.end('no router')
        }
    }
}

app.get=function(string,callback) {
    if (!string.endsWith('/')) {
        string=string+'/';
    }
    if (!string.startsWith('/')) {
        string='/'+string;
    }
    G[string]=callback;
}

var http=require('http');

http.createServer(app).listen(3000);
// console.log('Server running at http://127.0.0.1:3000/');

app.get('login',function(req,res) {
    res.end('hhh')
});

