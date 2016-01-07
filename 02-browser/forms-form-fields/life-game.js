<div id="grid"></div>
<button id="new">New</button>
<button id="next">Next generation</button>

<script>
function box (b){
 var node = document.createElement('input');
  node.type = 'checkbox';
  node.checked = b;
 return node;}
  
function grid(x,y){
 for (var j = 0; j < x; j++){
  var grid = document.querySelector('div');
  var stroka = document.createElement('br');
    grid.appendChild(stroka);
 for (var i = 0; i < y; i++){
  grid.appendChild(box());}
  }}

var button = document.querySelector('#new');
var nextbutton = document.querySelector('#next');
  
button.addEventListener('click', function(){
 var elements = document.getElementsByTagName('input');
 for (var i = 0; i < elements.length; i++)
 elements[i].checked = false; 
  for (var i = 0; i < elements.length; i++)
    if (Math.round(Math.random()) == 1)
    elements[i].checked = true;
});
  
grid(4,5);
var elements = document.getElementsByTagName('input');

//var y = document.getElementsByTagName('input');
nextbutton.addEventListener('click', function(){
console.log(elements[5].checked);});
</script>