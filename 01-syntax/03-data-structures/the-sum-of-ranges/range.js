/**
 *  [The sum of a range](file:///projects/Eloquent-JavaScript/html/04_data.html#h_8ZspxiCEC/)
 *
 */

function range(starts, ends, step) {
    var i = 0;
    var result = [];
    if (step > 0) {
        result[0] = starts;
        while (result[i] < ends) {
            result[i + 1] = result[i] + step;
            i = i + 1;
        }
        if (result[result.length - 1] > ends)
            result.splice(result.length - 1, 1);
    }
    if (step < 0) {
        result[0] = starts;
        while (result[i] > ends) {
            result[i + 1] = result[i] + step;
            i = i + 1;
        }
        if (result[result.length - 1] != ends)
            result.splice(result.length - 1, 1);
    }
    return result;
}

console.log(range(5, 2, -1));

// → [5, 4, 3, 2]
