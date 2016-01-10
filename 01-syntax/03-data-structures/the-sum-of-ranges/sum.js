/**
 *  [The sum of a range](file:///projects/Eloquent-JavaScript/html/04_data.html#h_8ZspxiCEC/)
 *
 */
function range(starts, ends) {
    var temp = 0;
    var array = [];
    if (starts > ends) {
        temp = starts;
        starts = ends;
        ends = temp;
    }
    var i = 0;
    array[0] = starts;
    while (array[i] < ends) {
        array[i + 1] = array[i] + 1;
        i = i + 1;
    }
    return array;
}

function sum(array) {
    var summ = 0;
    for (var i = 0; i < array.length; i = i + 1)
        summ = summ + array[i];
    return summ;
}

console.log(sum(range(1, 10)));
// → 55
