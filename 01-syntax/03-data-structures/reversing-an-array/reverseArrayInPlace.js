/**
 *  [Reversing and array](file:///projects/Eloquent-JavaScript/html/04_data.html#h_6xTmjj4Rf5)
 *
 */

var arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(x){
var n = x.length - 1;
for (var i = 0; i <= Math.floor((x.length - 1) / 2); i = i + 1){
 r = x[i];
 x[i] = x[n];
 x[n] = r;
 n = n - 1;}
return x;}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
