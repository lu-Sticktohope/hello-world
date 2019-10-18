const url = require('url')

const queryString = require('querystring');

function urlFunction(req,callback){
    console.log(req.method);
    var urlObject = url.parse(req.url,true);
    if(req.method == 'GET'){
        var object = {
            path:urlObject.pathname,
            params:urlObject.query,
        }
        callback(object);
    }else if(req.method == 'POST'){
        var postStream = '';
        req.on('data',(stream)=>{
            // console.log('post数据流',stream);
            postStream+=stream;
        })

    req.on('end',()=>{
        postStream = queryString.parse(postStream);
        var object = {
            path:urlObject.pathname,
            params:postStream,
        }
        callback(object)
    })
    }
}


exports.urlFunction = urlFunction;