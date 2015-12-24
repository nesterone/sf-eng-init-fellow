/**
 *  [The sum of a range](file:///projects/Eloquent-JavaScript/html/04_data.html#h_8ZspxiCEC/)
 *
 */

function range(starts,ends,step){
  var k = 0, i = 0, b = [];
  if (step > 0){
    b[0] = starts;
      while (b[i] < ends){
    b[i+1] = b[i] + step;
    i = i + 1;}
  if (b[b.length-1] > ends)
    b.splice(b.length - 1,1);}
  if (step < 0){
    b[0] = starts;
    while (b[i] > ends){
    b[i+1] = b[i] + step;
    i = i + 1;}
  if (b[b.length-1] != ends)
    b.splice(b.length - 1,1);}
 return b;}

console.log(range(5, 2, -1));

// → [5, 4, 3, 2]
