<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
      }
  body {
    height: 300px;
  }
</style>

<script>
 var els = [];
  for (var i = 0; i < 10; i++) {
    var element = document.createElement("div");
    element.className = "trail";
    document.body.appendChild(element);
    els.push(element);
  }
  var current = 0;
  
   addEventListener("mousemove", function moved(event) {
    els[current].style.top = event.pageY  + "px";
    els[current].style.left = event.pageX  + "px";
     current = current +1;
     if (current==9) current=0;
   });
  

  
</script>