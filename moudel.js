

exports.getExtname=function(fs,url){
    switch (url) {
        case '.html':
            return 'text/html'
            break;
            
        case '.css':
            return 'text/css'
            break;
            
        case '.js':
            return 'text/javascript'
            break;
            
        default:
                return 'text/html'
            break;
    }
}