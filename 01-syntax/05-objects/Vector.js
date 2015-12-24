Vector = function(x,y){
  this.x = x;
  this.y = y}

Vector.prototype.plus = function(newobj){
  this.x = this.x + newobj.x;
  this.y = this.y + newobj.y;
    return this;};

Vector.prototype.minus = function(newobj){
  this.x = this.x - newobj.x;
  this.y = this.y - newobj.y;
return this;}

Vector.prototype.length = function(){
  var a = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
return a;};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length());
// → 5
