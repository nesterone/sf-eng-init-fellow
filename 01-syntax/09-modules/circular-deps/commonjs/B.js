var A = require("commonjs/A");

var name = "Module B (CommonJs)";

console.log("Loaded: " + name);

module.exports.name = name;

module.exports.print = function () {
    console.log("Friendship of '" + name + "' and '" + A.name + "'");
};