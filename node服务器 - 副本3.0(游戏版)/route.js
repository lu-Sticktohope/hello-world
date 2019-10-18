
function routeFunction(pathname,handle,params,hui){
    var arr = pathname.split('/');
    var str = '/'+arr[1];
    console.log(str,333);
    if(typeof handle[str] == 'function'){
        var resFunction = handle[str];
        resFunction(pathname,params,hui);
    }
}


exports.routeFunction = routeFunction;
