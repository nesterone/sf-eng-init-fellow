<input type="text">
<script>
  var field = document.querySelector("input");
  field.addEventListener("keydown", function(event) {
    if (event.keyCode == "Q".charCodeAt(0)||"W".charCodeAt(0)||"X".charCodeAt(0))
     field.value = field.value.replace(/[qwx]/i,'');  });
  
  field.addEventListener("keyup", function(event) {
    if (event.keyCode == "Q".charCodeAt(0)||"W".charCodeAt(0)||"X".charCodeAt(0))
     field.value = field.value.replace(/[qwx]/i,'');  });
</script>