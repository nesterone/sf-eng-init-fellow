/**
 *  [Reversing and array](file:///projects/Eloquent-JavaScript/html/04_data.html#h_6xTmjj4Rf5)
 *
 */

function reverseArray(array) {
    var result = [], index = 0;
    for (var i = array.length - 1; i >= 0; i = i - 1) {
        result[index] = array[i];
        index = index + 1;
    }
    return result;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

