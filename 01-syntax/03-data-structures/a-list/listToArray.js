/**
 *  [A list](file:///projects/Eloquent-JavaScript/html/04_data.html#h_nSTX34CM1M)
 *
 */

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]