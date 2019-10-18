const http = require('http');

function serverFunction(routeFunction,urlFunction,handle){
    http.createServer((req,res)=>{
        urlFunction(req,(urlObject)=>{
            console.log(urlObject);
            var params = urlObject.params;
            var pathname = urlObject.path;
            routeFunction(pathname,handle,params,function hui(resData){
                res.writeHead(200,resData.writeHead);
                res.write(resData.data);
                res.end();
            });
        });
    }).listen(3001,'127.0.0.1',()=>{
        console.log('卧槽')
    })
}

exports.serverFunction = serverFunction;
