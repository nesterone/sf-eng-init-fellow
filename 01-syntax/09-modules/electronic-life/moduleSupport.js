/**
 * Created by Владелец on 14.01.2016.
 */
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



/**module animateworld */
var animateWorld = require('animateworld').animateWorld;

/**module world */
var plan = require('world').plan;
var Grid = require('world').Grid;
var Vector = require('world').Vector;
var randomElement = require('world').randomElement;
var directions = require('world').directions;
var directionNames = require('world').directionNames;
var World = require('world').World;
var View = require('world').View;
var LifelikeWorld = require('world').LifelikeWorld;
var actionTypes = require('world').actionTypes;

/**module ecosystem */
var BouncingCritter = require('ecosystem').BouncingCritter;
var Wall = require('ecosystem').Wall;
var world = require('ecosystem').world;
var test = require('ecosystem').test;
var dirPlus = require('ecosystem').dirPlus;
var WallFollower = require('ecosystem').WallFollower;
var Plant = require('ecosystem').Plant;
var PlantEater = require('ecosystem').PlantEater;
var valley = require('ecosystem').valley;

animateWorld(valley);

