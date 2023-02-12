function enter() {
    var input = pwdInput.password;
    var pwd = 666666;
    var result = document.getElementById("result");
    if (input.value == pwd) {
        location.replace("html/shouye.html");
    } else {
        result.innerText = "密码错误！请联系管理员：liujunxian1025@qq.com";
        result.style.display = "block";
    }
}