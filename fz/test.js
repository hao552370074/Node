var http = require('http');
var fs = require('fs');
var app = require('./server');
var url = require('url');
var mimeMoudel = require('../moudel');
var events=require('events');
var EventEmitter=new events.EventEmitter();
var MongoClient = require('mongodb').MongoClient;
var MongoUrl = 'mongodb://127.0.0.1:27017/my';
http.createServer(app).listen(3000);
// console.log('Server running at http://127.0.0.1:3000/');

app.get('/login', function (req, res) {
    var query = url.parse(req.url, true).query;
    var pathname = url.parse(req.url).pathname;
    let mime = mimeMoudel.getExtname(fs, pathname, EventEmitter)
    MongoClient.connect(MongoUrl, (error, db) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': `${mime}` + ';charset="UTF-8"' })
            res.end();
            console.log(error);
            return;
        }
        db.collection('user').insertOne({
            "name": '1',
        },(error, result) => {
            if (error) {
                console.log('失败');
                return;
            }
            console.log('成功');
            res.writeHead(200, { 'Content-Type':`${mime}`+';charset="UTF-8"' });
            // response.write(data)
            res.end(JSON.stringify(result.ops));
            db.close();
        })
    })

})
app.post('/222', function (req, res) {
    console.log(req.body);
})