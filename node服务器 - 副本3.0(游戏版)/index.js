const route = require('./route');

const url = require('./url');

const requestHandle = require('./requestHandle')

const server = require('./server');

var handle = {
    '/public':requestHandle.public,
    '/login':requestHandle.login,
    '/register':requestHandle.register,
}


server.serverFunction(route.routeFunction,url.urlFunction,handle);


