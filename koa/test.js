const koa = require('koa');
const app = new koa();
const router = require('koa-router')();
// const response = require('koa2-response');


const Pi=require('./Promise')
// app.use(async (ctx,next)=>{
//     next();
//     if (ctx.status==404) {
//         ctx.status=404;
//         ctx.body='这是一个404页面'
//     }else{
//         console.log(ctx.url);
//     }
// })
app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200; 
    } else {
      await next();
    }
  });


router.get('/', async (ctx) => {
    ctx.body = '首页';
}).get('/news', async (ctx) => {
    console.log(ctx.query);
    ctx.body = '新闻';
}).get('/mongo', async (ctx) => {
    let data= await Pi.find({'age':1});
    // console.log(data);
    
    // let data= await Pi.insert({'name':'中国战胜病疫！',"age":1});
    ctx.body={
        Code:1,
        data:data
    }

    // db.collection('user').insertOne({
    //     "name":'小李'
    // },(error,data)=>{
    //     // var list=[];
    //     if (error) {
    //         console.log(error);
    //         console.log('创建失败');
    //         return;
    //     }
    //     console.log(data);
    // })

})

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(8088);
// console.log('Server running at http://127.0.0.1:8080/');