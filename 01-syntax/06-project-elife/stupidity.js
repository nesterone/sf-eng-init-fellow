/**
 * Created by Владелец on 16.01.2016.
 */
function SmartPlantEater() {
    this.energy = 60;
}
SmartPlantEater.prototype.act = function (view) {
    var space = view.find(" ");
    if (this.energy > 90 && space)
        return {type: "reproduce", direction: space};
    var plants = view.findAll("*");
    if (plants.length > 1)
        return {type: "eat", direction: randomElement(plants)};
    if (space)
        return {type: "move", direction: space};
};
