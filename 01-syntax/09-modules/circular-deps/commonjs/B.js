var A = require("commonjs/A");

console.log("Loaded dependency to: " + A);

var B = "Module B (CommonJs)";

console.log("Loaded: " + B);

module.exports = B;