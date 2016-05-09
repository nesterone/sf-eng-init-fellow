var cx = document.querySelector("canvas").getContext("2d");
var total = results.reduce(function (sum, choice) {
    return sum + choice.count;
}, 0);

var currentAngle = -0.5 * Math.PI;
var centerX = 300, centerY = 150;

results.forEach(function (result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
        currentAngle, currentAngle + sliceAngle);
    cx.font = "14px Arial";
    cx.fillStyle = "black";
    cx.fillText(result.color, centerX + 130 * Math.cos(currentAngle + sliceAngle / 2),
        centerY + 130 * Math.sin(currentAngle + sliceAngle / 2));
    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
});