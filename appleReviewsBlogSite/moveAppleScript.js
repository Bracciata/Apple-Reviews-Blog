window.setInterval(move, 10);

var c = document.getElementById("movingAppleCanvas");
c.width = screen.width;
c.height = screen.height;
var ctx = c.getContext("2d");
var imgApple = document.createElement("img");
imgApple.src = "Assets/apple.png";
var posX = 0;
var posY = 0;
var direction = 0;

function move() {
    switch (direction) {
        case 0:
            posX += 1;
            if (posX + imgApple.width === screen.width) {
                direction = 1;
            }
            posY += 1;
            if (posY + imgApple.height === screen.height) {
                direction = 2;
            }
            break;
        case 1:
            posX -= 1;
            if (posX === 0) {
                direction = 0;
            }
            posY += 1;
            if (posY + imgApple.height === screen.height) {
                direction = 3;
            }
            break;

        case 2:
            posX += 1;
            if (posX + imgApple.width === screen.width) {
                direction = 3;
            }
            posY -= 1;
            if (posY === 0) {
                direction = 0;
            }

            break;
        case 3:
            posX -= 1;
            if (posX === 0) {
                direction = 2;
            }
            posY -= 1;
            if (posY === 0) {
                direction = 1;
            }
            break;
    }

    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(imgApple, posX, posY);
}