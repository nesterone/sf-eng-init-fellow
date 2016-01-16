/**
 *  [Reversing and array](file:///projects/Eloquent-JavaScript/html/04_data.html#h_6xTmjj4Rf5)
 *
 */

function reverseArrayInPlace(array) {
    var index = array.length - 1;
    for (var i = 0; i <= Math.floor((array.length - 1) / 2); i = i + 1) {
        temp = array[i];
        array[i] = array[index];
        array[index] = temp;
        index = index - 1;
    }
    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
