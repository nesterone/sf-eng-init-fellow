<div id="grid"></div>
<button id="new">New</button>
<button id="next">Next generation</button>
<button id="run">Auto run</button>

<script>
  var width = 30, height = 15;
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
  
grid(height, width);

nextbutton.addEventListener('click', life);

function life(){
  var elements = document.getElementsByTagName('input');
  for (var i = 0; i < height*width-1; i++){
  if ((countneibor().life[i] == true) && (countneibor().neibor[i] < 2) || (countneibor().neibor[i] > 3))
    elements[width * countneibor().x[i] + countneibor().y[i]].checked = false;
  if ((countneibor().life[i] == false) && (countneibor().neibor[i] == 3))
    elements[width * countneibor().x[i] + countneibor().y[i]].checked = true;
   }}
 
  
function countneibor(){
  var obj = {}; obj.x = []; obj.y = []; obj.neibor = []; obj.life = [];
  var neibor = 0;
  var elements = document.getElementsByTagName('input');
  
  for (var i = 0; i < height; i++)
    for (var j = 0; j < width; j++)
      {
       if (width * i + j + 1 < width * height) 
        if ((elements[width * i + j + 1].checked == true))
       neibor+=1;
        
       if (width * i + j > 0) 
        if (elements[width * i + j - 1].checked == true)
       neibor+=1;
        
        if(i < height - 1){
          if (elements[width*(i)+j+width].checked == true)
       neibor+=1;
         if (width*(i)+j+width+1 < width * height)
          if (elements[width*(i)+j+width+1].checked == true)
       neibor+=1;
          if (elements[width*(i)+j+width-1].checked == true)
       neibor+=1;}
        
        if(i > 0){
          if (elements[width*(i)+j-width].checked == true)
       neibor+=1;
        
          if (elements[width*(i)+j-width+1].checked == true)
       neibor+=1;
         if (width*(i)+j-width-1 > 0)
          if (elements[width*(i)+j-width-1].checked == true)
       neibor+=1;}
obj.x.push(i);
obj.y.push(j);
obj.neibor.push(neibor);
neibor=0;
 if (elements[width * i + j].checked == true)
   obj.life.push(true);
     else obj.life.push(false);
      } 
return obj;}
  
 var running = null;
  document.querySelector("#run").addEventListener("click", function() {
    if (running) {
      clearInterval(running);
      running = null;
    } else {
      running = setInterval(life, 400);
    }
  });
  
</script>