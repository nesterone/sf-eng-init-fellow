<textarea id="code">return 'hi';</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  var res = '';
var textarea = document.querySelector("textarea");
var button = document.querySelector("button");
button.addEventListener('mousedown', function(){
  try{
   var plusOne = new Function(textarea.value);
   newel(plusOne());}
  catch(e){
   newel('Name of error: ' + e.name);
   newel('Error message: ' + e.message);}
});
 function newel(str){
   var textelem = document.createElement('p');
  var text = document.createTextNode(str);
  textelem.appendChild(text);
  document.body.appendChild(textelem);}
</script>