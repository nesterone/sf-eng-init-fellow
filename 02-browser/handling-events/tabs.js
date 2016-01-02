<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    arr=[];
    for (var i=0; i<=node.childNodes.length-1; i++){
  if (node.childNodes[i].nodeType == document.ELEMENT_NODE){
      //console.log(node.childNodes[i].textContent);
  arr.push(node.childNodes[i]);}}

     for (var i = 0; i <= arr.length-1; i++){
      newel = document.createElement('button');
      newtext = document.createTextNode(arr[i].getAttribute('data-tabname'));
      newel.appendChild(newtext);
      document.body.appendChild(newel);
     }
        
    brr = [];
    a = document.body.getElementsByTagName('button');
    for (var i = 0; i<=a.length-1; i++){
      brr.push(a[i]);}
    
      
    
   
   brr.forEach(function(element,i){
     element.addEventListener("click", function(){
       for(var k = 0; k<=brr.length-1; k++)
         if (brr[k].getAttribute('style') == "background-color: red;")
           brr[k].removeAttribute('style');
         
       element.setAttribute("style", "background-color: red;");
       elements = document.getElementsByTagName('button');
       
   if (elements[elements.length-1].nextSibling != null)
      elements[elements.length-1].nextSibling.remove();
       ne = document.createElement('div');
       ntext = document.createTextNode(arr[i].textContent);
      ne.appendChild(ntext); 
       
    document.body.appendChild(ne);});});
    
     
   }
  
  asTabs(document.querySelector("#wrapper"));
</script>