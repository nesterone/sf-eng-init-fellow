/**
 *  [Reversing and array](file:///projects/Eloquent-JavaScript/html/04_data.html#h_6xTmjj4Rf5)
 *
 */

function reverseArray(c){
  var n = [], k = 0;
  for (var i = c.length - 1; i >= 0; i = i - 1){
    n[k] = c[i];
    k = k + 1;}
  return n;}

var arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(x){
var n = x.length - 1;
for (var i = 0; i <= Math.floor((x.length - 1) / 2); i = i + 1){
 r = x[i];
 x[i] = x[n];
 x[n] = r;
 n = n - 1;}
return x;}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
