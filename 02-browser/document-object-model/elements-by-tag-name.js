<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  
function byTagName(node, string) {
  var a=[];
  function inner(node,string){
      if (node.nodeType == document.ELEMENT_NODE) {
     for (var i = 0; i < node.childNodes.length; i++) {
       if (node.childNodes[i].tagName == string.toUpperCase())
        a.push(node.childNodes[i].tagName);
       inner(node.childNodes[i], string);
    }
  } return a;}
return inner(node,string);}

  
  
  console.log(byTagName(document.body, "h1").length);
  // > 1
  console.log(byTagName(document.body, "span").length);
  // > 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // > 2
 </script>