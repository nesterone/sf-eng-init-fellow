/**
 * Created by Iaroslav Zhbankov on 29.01.2016.
 */
function skipSpace(string) {
    var regExp = /^(\s|#.*)*/;
    var first = regExp.exec(string);
    if (first == -1) return "";
    return string.slice(first[0].length);
}