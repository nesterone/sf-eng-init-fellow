/**module world */
var World = require('world').World;
var Grid = require('world').Grid;
var randomElement = require('world').randomElement;
var directions = require('world').directions;
var directionNames = require('world').directionNames;

function BouncingCritter() {
    this.direction = randomElement(directionNames);
};

BouncingCritter.prototype.act = function (view) {
    if (view.look(this.direction) != " ")
        this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
};

function Wall() {
}

var world = new World(plan, {
    "#": Wall,
    "o": BouncingCritter
});

var test = {
    prop: 10,
    addPropTo: function (array) {
        return array.map(function (elt) {
            return this.prop + elt;
        }.bind(this));
    }
};

var test = {
    prop: 10,
    addPropTo: function (array) {
        return array.map(function (elt) {
            return this.prop + elt;
        }, this); // ? no bind
    }
};


function dirPlus(dir, n) {
    var index = directionNames.indexOf(dir);
    return directionNames[(index + n + 8) % 8];
}

function WallFollower() {
    this.dir = "s";
}

WallFollower.prototype.act = function (view) {
    var start = this.dir;
    if (view.look(dirPlus(this.dir, -3)) != " ")
        start = this.dir = dirPlus(this.dir, -2);
    while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) break;
    }
    return {type: "move", direction: this.dir};
};

function Plant() {
    this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function (view) {
    if (this.energy > 15) {
        var space = view.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};

function PlantEater() {
    this.energy = 20;
}
PlantEater.prototype.act = function (view) {
    var space = view.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var plant = view.find("*");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
};



module.exports.BouncingCritter = BouncingCritter;
module.exports.Wall = Wall;
module.exports.world = world;
module.exports.test = test;
module.exports.dirPlus = dirPlus;
module.exports.WallFollower = WallFollower;
module.exports.Plant = Plant;
module.exports.PlantEater = PlantEater;



