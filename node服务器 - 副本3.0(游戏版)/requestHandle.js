const fs = require('fs');

function register(pathname,params,hui){
    console.log('用户来注册');
    var str = JSON.stringify(params);
    console.log(str,12333);
    var resData = {};
    fs.writeFile('main.json',str,(err)=>{
        if(err){
            resData.writeHead = {'Content-Type':'text/html;charset=utf8'};
            resData.data = '<h2>对不起,请求错误404</h2>';
            hui(resData);
        }else{
            resData.writeHead = {'Content-Type':'application/json'};
            resData.data = str;
            hui(resData);
        }
    })
}


function login(pathname,params,hui){
    console.log('用户来登录');
    var resData = {};
    fs.readFile('main.json',(err,data)=>{
        if(err){
            resData.writeHead = {'Content-Type':'text/html;charset=utf8'};
            resData.data = '<h2>对不起,读取失败404</h2>';
            hui(resData);
        }else{
            var dataStr = data.toString('utf-8');
            console.log(dataStr,0);
            var dataString = JSON.parse(dataStr);
            var phone = dataString.phone;
            var password = dataString.password;
            console.log(phone,1)
            console.log(password,2);
            if(phone == params.phone&&password == params.password){
                var json = JSON.stringify(dataString);
                resData.writeHead = {'Content-Type':'application/json'};
                resData.data = json;
                hui(resData);
            }
            else{
                resData.writeHead = {'Content-Type':'text/html;charset=utf8'};
                resData.data = '404';
                hui(resData);
            }
        }
    })
}



function public(pathname,params,hui){
    console.log('请求文件');
    var resData = {};
    var postfix = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名;
    fs.readFile(pathname.substr(1),(err,data)=>{
        if(err){
            console.log('乌拉圭达成')
            fs.readFile('./public/HTML/main.html',(err,data)=>{
                if(!err){
                    resData.writeHead = {'Content-Type':'text/html;charset=utf8'};
                    resData.data = data;
                    hui(resData);
                }
            })
        }else{
            switch(postfix){
                case '.html':
                resData.writeHead = {'Content-Type':'text/html'};
                break;
                case '.css':
                resData.writeHead = {'Content-Type':'text/css'};
                break;
                case '.js':
                resData.writeHead = {'Content-Type':'application/javascript'};
                break;
                case '.jpg':
                resData.writeHead = {'Content-Type':'image/jpg'};
                break;
                case 'json':
                resData.writeHead = {'Content-Type':'application/json'};
                break;
            }
            resData.data = data;
            hui(resData);
        }
    })
}


exports.login = login;
exports.register = register;
exports.public = public;


