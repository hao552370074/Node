
var Server = function () {
    var url = require('url')
    var G = this;

    this._GET={};
    this._POST={};
    
    var app = function (req, res) {

        if (req.url != '/favicon.ico') {
            var pathname = url.parse(req.url).pathname;
            if (!pathname.endsWith('/')) {
                pathname = pathname + '/'
            }

            var method=req.method;
            
            if (G['_'+method][pathname]) {
                var postStr='';
                if (method=='POST') {
                    req.on('data',function (chunk) { 
                        postStr+=chunk;
                    })
                    req.on('end',function (error,data) { 
                        req.body=postStr;
                        G['_'+method][pathname](req, res);
                    })
                    
                }else{
                    G['_'+method][pathname](req, res);
                }
            } else {
                res.end('no router')
            }
        }
    }

    app.get = function (string, callback) {
        if (!string.endsWith('/')) {
            string = string + '/';
        }
        if (!string.startsWith('/')) {
            string = '/' + string;
        }
        G._GET[string] = callback;
    }
    app.post = function (string, callback) {
        if (!string.endsWith('/')) {
            string = string + '/';
        }
        if (!string.startsWith('/')) {
            string = '/' + string;
        }
        G._POST[string] = callback;
    }

    return app;
}


module.exports = Server();