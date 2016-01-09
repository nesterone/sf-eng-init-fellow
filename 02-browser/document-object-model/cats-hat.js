var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");

var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    hat.style.top = (Math.sin(angle) * 20) + (Math.sin(angle * 10) * 30) + "px";
    hat.style.left = (Math.cos(angle) * 200) + (Math.cos(angle * 10) * 30) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
