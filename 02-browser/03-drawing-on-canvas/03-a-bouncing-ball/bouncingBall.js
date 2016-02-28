var cx = document.querySelector("canvas").getContext("2d");
var ballPosX = 100, ballPosY = 320;
var horizDirection = 1, vertDirection = 1;
var lastTime = null;
function frame(time) {
    if (lastTime != null)
        updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.times = function (factor) {
    return new Vector(this.x * factor, this.y * factor);
};

function updateAnimation(step) {

    var x0 = 20, y0 = 20, rectWidth = 350, rectHeigh = 350;
    var x = x0 + 40 + new Vector(step, step * 0.3).times(ballPosX * 100).x;
    var y = y0 + 40 + new Vector(step, step * 0.3).times(ballPosY * 100).y;

    if (x + 11 >= rectWidth + x0 || x - 9 <= x0) {
        horizDirection = -1 * horizDirection;
    }
    if (y + 11 >= rectHeigh + y0 || y - 9 <= y0) {
        vertDirection = -1 * vertDirection;
    }
    ballPosX = ballPosX + horizDirection * 1;
    ballPosY = ballPosY + vertDirection * 1;
    cx.clearRect(0, 0, 400, 400);
    cx.save();
    cx.strokeRect(x0, y0, rectWidth, rectHeigh);
    cx.beginPath();
    cx.arc(x + 1, y + 1, 10, 0, 7);
    cx.fillStyle = 'blue';
    cx.fill();
    cx.restore();
}