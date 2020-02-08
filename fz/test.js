const http = require('http');
const fs = require('fs');
const app = require('./server');
const url = require('url');
var mimeMoudel = require('../moudel');

const events=require('events');
const EventEmitter=new events.EventEmitter();

const MongoClient = require('mongodb').MongoClient;
const MongoUrl = 'mongodb://127.0.0.1:27017/my';


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

        // 新增
        // db.collection('user').insertOne({
        //     "name": '2',
        // },(error, result) => {
        //     if (error) {
        //         console.log('失败');
        //         return;
        //     }
        //     console.log('成功');
        //     res.writeHead(200, { 'Content-Type':`${mime}`+';charset="UTF-8"' });
        //     // response.write(data)
        //     res.end(JSON.stringify(result.ops));
        //     db.close();
        // })

        // 查询 
        var cursor=db.collection('user').find({"name":"2"}).skip(2).limit(4);
        var list=[];
        cursor.each(function (error,doc) {
            if (error) {
                console.log(error);
                return;
            }
            if (doc!=null) {
                list.push(doc)
            }else{
                res.end(JSON.stringify(list))
            }
        })

    })

})
app.post('/222', function (req, res) {
    console.log(req.body);
})