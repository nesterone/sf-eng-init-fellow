var cx = document.querySelector("canvas").getContext("2d");

function trapeze() {
    cx.beginPath();
    cx.moveTo(10, 50);
    cx.lineTo(30, 10);
    cx.lineTo(80, 10);
    cx.lineTo(100, 50);
    cx.lineTo(10, 50);
    cx.stroke();
};
function diamond() {
    cx.fillStyle = "red";
    cx.save();
    cx.translate(130 + 40 / 2, 0);
    cx.rotate(45 * Math.PI / 180);
    cx.fillRect(0, 0, 40, 40)
    cx.restore();
}

function zigzag(linesNumber) {
    var x, y;
    cx.beginPath();
    cx.moveTo(200, 5);
    for (var i = 1; i <= linesNumber; i++) {
        if (i % 2 == 0) {
            x = 280;
        } else {
            x = 200;
        }
        y = i * 5;
        cx.lineTo(x, y);
    }
    cx.stroke();
}

function spiral() {
    cx.beginPath();
    for (var i = 1; i < 95; i++) {
        cx.arc(350, 50, 0.5 * i, (i - 1) * 15 * Math.PI / 180, i * 15 * Math.PI / 180);
    }
    cx.stroke();
}

function star(x0, y0, radius, peaksNumber) {
    cx.save();
    cx.strokeStyle = "orange";
    cx.fillStyle = 'orange';
    cx.beginPath();
    cx.moveTo(x0 + radius * Math.cos(0), y0 + radius * Math.sin(0));
    for (i = 1; i <= peaksNumber; i++) {
        x = radius * Math.cos(i * 2 * Math.PI / peaksNumber);
        y = radius * Math.sin(i * 2 * Math.PI / peaksNumber);
        cx.quadraticCurveTo(x0, y0, x0 + x, y0 + y);
    }
    cx.stroke();
    cx.fill();
    cx.restore();
}

star(450, 50, 50, 10);
diamond();
trapeze();
zigzag(11);
spiral();