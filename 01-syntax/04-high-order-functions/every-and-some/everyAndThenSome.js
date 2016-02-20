function every(arrayOfValues, method) {
    var result = true;
    for (var i = 0; i < arrayOfValues.length; i++) {
        if (method(arrayOfValues[i]) != true)
            result = method(arrayOfValues[i]);
    }
    return result;
}
function some(arrayOfValues, method) {
    var result = false;
    for (var i = 0; i < arrayOfValues.length; i++) {
        if (method(arrayOfValues[i]) == true)
            result = method(arrayOfValues[i]);
    }
    return result;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false