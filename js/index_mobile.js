function changeVideo() {
    document.getElementById("body1").style.display = "block";
    document.getElementById("body2").style.display = "none";
    document.getElementById("body3").style.display = "none";
    document.getElementById("body4").style.display = "none";
    document.getElementById("video").setAttribute("style", "fill: rgb(125, 197, 235)");
    document.getElementById("text1").style.color = "rgb(125, 197, 235)";
    document.getElementById("picture1").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("picture2").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text2").style.color = "rgb(191, 191, 191)";
    document.getElementById("code1").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("code2").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text3").style.color = "rgb(191, 191, 191)";
    document.getElementById("directory").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text4").style.color = "rgb(191, 191, 191)";
}

function changePicture() {
    document.getElementById("body1").style.display = "none";
    document.getElementById("body2").style.display = "block";
    document.getElementById("body3").style.display = "none";
    document.getElementById("body4").style.display = "none";
    document.getElementById("video").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text1").style.color = "rgb(191, 191, 191)";
    document.getElementById("picture1").setAttribute("style", "fill: rgb(125, 197, 235)");
    document.getElementById("picture2").setAttribute("style", "fill: rgb(125, 197, 235)");
    document.getElementById("text2").style.color = "rgb(125, 197, 235)";
    document.getElementById("code1").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("code2").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text3").style.color = "rgb(191, 191, 191)";
    document.getElementById("directory").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text4").style.color = "rgb(191, 191, 191)";
}

function changeCode() {
    document.getElementById("body1").style.display = "none";
    document.getElementById("body2").style.display = "none";
    document.getElementById("body3").style.display = "block";
    document.getElementById("body4").style.display = "none";
    document.getElementById("video").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text1").style.color = "rgb(191, 191, 191)";
    document.getElementById("picture1").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("picture2").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text2").style.color = "rgb(191, 191, 191)";
    document.getElementById("code1").setAttribute("style", "fill: rgb(125, 197, 235)");
    document.getElementById("code2").setAttribute("style", "fill: rgb(125, 197, 235)");
    document.getElementById("text3").style.color = "rgb(125, 197, 235)";
    document.getElementById("directory").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text4").style.color = "rgb(191, 191, 191)";
}

function changeDirectory() {
    document.getElementById("body1").style.display = "none";
    document.getElementById("body2").style.display = "none";
    document.getElementById("body3").style.display = "none";
    document.getElementById("body4").style.display = "block";
    document.getElementById("video").setAttribute("style", "fill: rgb(205, 205, 205)");
    document.getElementById("text1").style.color = "rgb(191, 191, 191)";
    document.getElementById("picture1").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("picture2").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text2").style.color = "rgb(191, 191, 191)";
    document.getElementById("code1").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("code2").setAttribute("style", "fill: rgb(191, 191, 191)");
    document.getElementById("text3").style.color = "rgb(191, 191, 191)";
    document.getElementById("directory").setAttribute("style", "fill: rgb(125, 197, 235)");
    document.getElementById("text4").style.color = "rgb(125, 197, 235)";
}

var flagJava = true;

function rotateJava() {
    if (flagJava) {
        document.getElementById("Java").style.transition = ".2s";
        document.getElementById("Java").style.transform = "rotate(90deg)";
        flagJava = false;
    } else {
        document.getElementById("Java").style.transform = "rotate(0deg)";
        flagJava = true;
    }
}

var flagMySQL = true;

function rotateMySQL() {
    if (flagMySQL) {
        document.getElementById("MySQL").style.transition = ".2s";
        document.getElementById("MySQL").style.transform = "rotate(90deg)";
        flagMySQL = false;
    } else {
        document.getElementById("MySQL").style.transform = "rotate(0deg)";
        flagMySQL = true;
    }
}