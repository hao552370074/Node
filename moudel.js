

exports.getExtname=function(fs,url,EventEmitter){
    let aa;
    switch (url) {
        case '.html':
            // return 'text/html'
            aa= 'text/html'
            break;
            
        case '.css':
            // return 'text/css'
            aa= 'text/css'
            break;
            
        case '.js':
            // return 'text/javascript'
            aa= 'text/javascript'
            break;
            
        default:
                // return 'text/html'
                aa= 'text/html'
            break;
    }
    EventEmitter.emit('data',aa)
}