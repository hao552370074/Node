const fs = require('fs');

// 管道流复制
// var readStream=fs.createReadStream('./caomei.jpg');
// var writeStream=fs.createWriteStream('./wenjian/fuzhiCaimei.jpg');
// readStream.pipe(writeStream)


// 写入数据
// var str='写入数据\n';
// for (let i = 1; i < 20; i++) {
//     str += '写入数据\n';
// }
// var writeStream=fs.createWriteStream('./wenjian/size.txt');
// writeStream.write(str);
// writeStream.end();
// writeStream.on('finish',(error)=>{
//     console.log('写入成功');
// });

var fileStream=fs.createReadStream('./wenjian/size.txt')

var count=0;
var str='';

fileStream.on('data',(data)=>{
    str+=data;
    count++;
    console.log(data);
    
})
fileStream.on('end',(res)=>{
    console.log(res);
    
})
fileStream.on('error',(erro)=>{
    console.log(erro);
    
})

