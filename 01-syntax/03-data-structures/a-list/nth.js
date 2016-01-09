/**
 *  [A list](file:///projects/Eloquent-JavaScript/html/04_data.html#h_nSTX34CM1M)
 *
 */


function nth(list, position) {
    var i = 0;
    for (var node = list; node; node = node.rest) {
        i++;
        if (position == i - 1) return node.value;
    }
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20