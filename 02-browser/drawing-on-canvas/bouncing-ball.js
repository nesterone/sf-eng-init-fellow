<canvas width="400" height="400"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  var i = 0, j = 0, a = 1, b = 1;  
  var lastTime = null;
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  
  requestAnimationFrame(frame);

  function updateAnimation(step) {
    
  var x0 = 20, y0 = 20, rectWidth = 150, rectHeigh = 150;
    
  var x = x0 + 40 + new Vector(step, step * 0.3).times(i * 100).x;
  var y = y0 + 40 + new Vector(step, step * 0.3).times(j * 100).y;
    if ( x + 21 >= rectWidth + x0 || x - 19 <= x0)
      a = -1 * a;
    if (y + 21 >= rectHeigh + y0 || y - 19 <= y0)
      b = -1 * b;
    i = i + a * 1;
    j = j + b * 1;
    cx.clearRect(0, 0, 400, 400);
    cx.save();
    cx.strokeRect(x0, y0, rectWidth, rectHeigh);
    cx.beginPath();
    cx.arc(x + 1, y + 1, 20, 0, 7);
    cx.fillStyle = 'blue';
    cx.fill();
    cx.restore();
   }
  
</script>