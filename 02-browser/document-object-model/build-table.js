<style>
    /* Defines a cleaner look for tables */
table  { border-collapse: collapse; }
td, th { border: 1px solid black; padding: 3px 8px; }
th     { text-align: left; }
</style>
 function buildTable(data){
   table = document.createElement('table');
   newtr = document.createElement('tr');
 for (var m=0; m<=2; m++){
   newth = document.createElement('th');
    x = Object.keys(data[0])[m];
   text = document.createTextNode(x);
   newth.appendChild(text);
  newtr.appendChild(newth);}
table.appendChild(newtr);

  for (var i=0; i<=data.length-1; i++){
  newtr = document.createElement('tr');           // создаем новый узел tr
   for (var j=0; j<=2; j++){
  newtd1 = document.createElement('td');
   var   x = data[i][Object.keys(data[i])[j]];
  text1 = document.createTextNode(x);        // создаем текст для нового узла
  newtd1.appendChild(text1);
  newtr.appendChild(newtd1);                      // добавляем текст в новый узел
   }
 table.appendChild(newtr);       // добавляем новый узел в документ
  }
 return table;}

  document.body.appendChild(buildTable(MOUNTAINS));
