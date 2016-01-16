/**
 *  [A list](file:///projects/Eloquent-JavaScript/html/04_data.html#h_nSTX34CM1M)
 *
 */

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list}
    return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}