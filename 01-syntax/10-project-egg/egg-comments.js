/**
 * Created by Iaroslav Zhbankov on 29.01.2016.
 */
function skipSpace(string) {
    var regExp = /^(\s|#.*)*/;
    var first = regExp.exec(string);
    if (first == -1) return "";
    return string.slice(first[0].length);
}

console.log(parse("# hello\nx"));
// ? {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// ? {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

//console.log(Object.getPrototypeOf());