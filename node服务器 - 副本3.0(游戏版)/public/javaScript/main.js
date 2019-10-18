var div = $('<div></div>').addClass('div')
var cont = '一花一世界一叶一菩提'
div.append(cont);
$('body').append(div);



$('.button1').click(function(){
    var name = $('#name').val();
    var password = $('#password').val();
    var phone = $('#phone').val();

    var params = {
        name:name,
        password:password,
        phone:phone,
    }
    console.log(params);

    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:3001/register",
        data: params,
        dataType: "json",
        success: function (response) {
            console.log(response);
            alert('注册成功')
        }
    });
})



$('.button2').click(function(){
    var password = $('#password2').val();
    var phone = $('#phone2').val();

    var params = {
        password:password,
        phone:phone,
    }
    console.log(params);

    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3001/login",
        data: params,
        dataType: "json",
        success: function (response) {
            console.log(response.name);
            console.log(response);
            if(response == '404'){
                // alert("对不起,您还未在我公司注册");
                alert("臭煞笔,你哪来的？滚回去注册");
            }else{
                alert('登录成功，欢迎您！尊敬的'+response.name+'先生');
            }
        }
    });
})



