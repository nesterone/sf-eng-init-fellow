/**
 *  [The sum of a range](file:///projects/Eloquent-JavaScript/html/04_data.html#h_8ZspxiCEC/)
 *
 */
function range(starts, ends) {
    var k = 0;
    var b = [];
    if (starts > ends) {
        k = starts;
        starts = ends;
        ends = k;
    }
    var i = 0;
    b[0] = starts;
    while (b[i] < ends) {
        b[i + 1] = b[i] + 1;
        i = i + 1;
    }
    return b;
}

function sum(c) {
    var summ = 0;
    for (var i = 0; i < c.length; i = i + 1)
        summ = summ + c[i];
    return summ;
}

console.log(sum(range(1, 10)));
// → 55
