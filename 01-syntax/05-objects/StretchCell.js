StretchCell = function(inner, width, height){
  this.inner = inner;
  var variable = this.inner.text;
  if (variable.length < height){
    while (height - variable.lenght > 0){
      variable = variable.concat([""]);
      height = height - 1;}}
  
  this.height = variable.length;
  
  this.inner.text = variable.map(function(i){
  if (i.length < width)    
    return i.concat(repeat("_",width - i.length));
    else
      return i;});}

StretchCell.prototype.minWidth = function(){
  return this.inner.minWidth()};

StretchCell.prototype.minHeight = function(){
  return this.inner.minHeight()};

StretchCell.prototype.draw = function(w,h){
  return this.inner.draw(w,h)};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// > 3
console.log(sc.minHeight());
// > 2
console.log(sc.draw(3, 2));
// > ["abc", "   "]
