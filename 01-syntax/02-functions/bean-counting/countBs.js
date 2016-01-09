/**
 *  [Bean Counting](http://eloquentjavascript.net/03_functions.html#h_XTmO7z7MPq)
 *
 */

function countBs(string) {
    var result = 0;
    for (var i = 0; i <= string.length - 1; i++)
        if (string.charAt(i) == 'B')
            result++;
    return result;
}


console.log(countBs("BBC"));
// → 2