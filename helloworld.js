let foo='哈哈'

console.log(foo);

var fs =require('fs')


// fs.readFile('txt.txt',function(error,data){
//     console.log(data.toString());
// })

fs.writeFile('nbs.js','IG！',function(error,data){
    if (error) {
        console.log('失败');
    }else{
        console.log('成功');
    }
})
