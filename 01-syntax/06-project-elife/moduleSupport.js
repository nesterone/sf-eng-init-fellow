function require(name) {
    if (name in require.cache)
        return require.cache[name];

    var code = new Function("exports, module", readFile(name));
    var exports = {}, module = {exports: exports};
    code(exports, module);

    require.cache[name] = module.exports;
    return module.exports;
}
require.cache = Object.create(null);


function readFile(name) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', name + ".js", false);
    xhr.send(null);
    return xhr.responseText;
}

var  animateWorld = require('animateworld');
