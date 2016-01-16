topEnv["array"] = function () {
    return Array.prototype.slice.call(arguments, 0);
};

topEnv["print"] = function (value) {
    console.log(value);
    return value;
};

topEnv["length"] = function (array) {
    return array.length;
};

topEnv["element"] = function (array, n) {
    return array[n];
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");


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