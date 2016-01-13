topEnv["array"] = function(){
    return Array.prototype.slice.call(arguments, 0);
};

topEnv["print"] = function(value) {
    console.log(value);
    return value;
};

topEnv["length"] = function(array) {
    return array.length;
};

topEnv["element"] = function(array, n) {
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