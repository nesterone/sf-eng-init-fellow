function every(a, b){
  var x = true;
  for (var i = 0; i < a.length; i++){
    if (b(a[i]) != true)
      x = b(a[i]);  }
  return x;}
function some(a, b){
  var x = false;
  for (var i = 0; i < a.length; i++){
    if (b(a[i]) == true)
      x = b(a[i]);  }
  return x;}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
