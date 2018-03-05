//javascripterino for appleReviewsBlog ©2018

window.setInterval(rotate, 100);

var canvas = document.getElementById("canvas1");
canvas.height = canvas.width;
var ctx = canvas.getContext("2d");

var imgChineseSymbol = document.createElement("img");
imgChineseSymbol.src = "Assets/tao.png";
var imgApple = document.createElement("img");
imgApple.src = "Assets/apple.png";
var imgRot = imgApple;

var degree = 0;
var size = (canvas.width / 2) * Math.sqrt(2);

function rotate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingQuality = "high";
    ctx.translate((canvas.width / 2), (canvas.height / 2));
    ctx.rotate(1 * Math.PI / 180);

    ctx.translate(-(canvas.width / 2), -(canvas.height / 2));
    ctx.drawImage(imgRot, (canvas.width / 2) - (size / 2), (canvas.width / 2) - (size / 2), size, size);
    degree++;
    if (degree == 361) {
        degree = 0;
        if (imgRot == imgApple) {
            imgRot = imgChineseSymbol;
        } else {
            imgRot = imgApple;
        }
    }
    //body color shifting
    var R = (parseInt)((degree * 1.1) % 255);
    var G = (parseInt)((degree * 1.6) % 255);
    var B = (parseInt)((degree * .8 + 150) % 255);
    var body = document.getElementById("body1");
    body.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
}
window.onload = ratingBarSetUp();

function ratingBarSetUp() {
    var response = document.getElementById("ratingResponse");
    var ratingStars = new Array();
    for (var i = 0; i < 5; i++) {
        ratingStars[i] = document.getElementById("star" + (i + 1).toString());
    }
    for (var i = 0; i < 5; i++) {
        ratingStars[i].onclick = function() {
            response.innerHTML = "There's a time and place for everything, but not now!";
        }
    }
}