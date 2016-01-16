/**
 *  [Bean Counting](http://eloquentjavascript.net/03_functions.html#h_XTmO7z7MPq)
 *
 */

function countChar(string, char) {
    var result = 0;
    for (var i = 0; i <= string.length - 1; i++)
        if (string.charAt(i) == char)
            result++;
    return result;
}


console.log(countChar("kakkerlak", "k"));
// → 4