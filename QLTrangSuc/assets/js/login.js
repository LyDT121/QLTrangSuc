var user = {
    username: 'LyDT',
    password: '123'
}

var username, pass;

$.each($('input[name="login"]'), function (index, element) { 
    $(element).blur(function () { 
        if(element.id === 'username')
            username = element.value;
        if(element.id === 'password')
            pass = element.value;
        if(username && pass){
            $('.submit').click(function() {
                if(username === user.username && pass === user.password){
                    openAdmin('admin.html');
                }
                else{
                    
                }
            })
        }
    });  
});

openAdmin = function(url){
    window.open(url, '_parent').focus();
}





