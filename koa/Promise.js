var MongoClient = require('mongodb').MongoClient;
const MongoUrl = 'mongodb://127.0.0.1:27017/my'
module.exports = {
    find(obj) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(MongoUrl, (err, db) => {
                if (err) throw err;
                var cursor = db.collection('user').find(obj);
                var list = [];
                cursor.each(function (error, doc) {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    if (doc != null) {
                        list.push(doc)
                    } else {
                        db.close();
                        resolve(list);
                    }
                })
            });
        })
    },
    insert(obj) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(MongoUrl, (err, db) => {
                if (err) throw err;
                db.collection('user').insertOne(obj,(error,res)=>{
                    if (error) {
                        reject(error)
                        return;
                    }
                    resolve(res.ops[0])
                });
            });
        })
    },
}