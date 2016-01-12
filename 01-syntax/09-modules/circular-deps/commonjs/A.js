var B = require("commonjs/B");

console.log("Loaded dependency to: " + B);

var A = "Module A (CommonJs)";

console.log("Loaded: " + A);

module.exports = A;