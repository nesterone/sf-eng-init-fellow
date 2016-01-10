var arrays = [[1, 2, 3], [4, 5], [6]];

var result = arrays.reduce(function (i, current) {
    return i.concat(current);
}, [])
console.log(result);
