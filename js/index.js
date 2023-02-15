function enter() {
    var input = pwdInput.password;
    var result = document.getElementById("result");
    if (hex_md5(input.value) == "f379eaf3c831b04de153469d1bec345e") {
        location.replace("html/shouye.html");
    } else {
        input.value = "";
        result.innerText = "密码错误！\n请联系管理员：liujunxian1025@qq.com";
        result.style.display = "block";
    }
}