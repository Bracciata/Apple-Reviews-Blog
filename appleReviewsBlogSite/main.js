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

function ratingStarClick(clicked_Id) {
    var numbStar = clicked_Id.substring(clicked_Id.length - 1, clicked_Id.length);
    for (i = 1; i < 6; i++) {
        var id = "star" + i;
        var star = document.getElementById(id);
        if (i <= numbStar) {
            star.innerHTML = "\u2605";
            console.warn(i);
        } else {
            star.innerHTML = "☆";
        }
    }
    document.getElementById("ratingResponse").innerHTML = "There is a time and place for everything but not now!";
}