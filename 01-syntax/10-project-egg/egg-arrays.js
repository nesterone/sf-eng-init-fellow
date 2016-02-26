/**
 * Created by Iaroslav Zhbankov on 29.01.2016.
 */
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