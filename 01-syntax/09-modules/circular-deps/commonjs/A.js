var B = require("commonjs/B");

var name = "Module A (CommonJs)";

console.log("Loaded: " + name);

module.exports.name = name;

module.exports.print =  function(){
    console.log("Friendship of '" + name + "' and '" + B.name + "'");
};