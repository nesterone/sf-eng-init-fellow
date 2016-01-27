function Tiger() {
    this.energy = 200;
}

Tiger.prototype.act = function (view) {
    var space = view.find(" ");
    if (this.energy > 400 && space)
        return {type: "reproduce", direction: space};
    var plants = view.findAll("O");
    if (plants.length > 0)
        return {type: "eat", direction: randomElement(plants)};
    if (space)
        return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
    ["####################################################",
        "#                 ####         ****              ###",
        "#   *  @  ##                 ########       OO    ##",
        "#   *    ##        O O                 ****       *#",
        "#       ##*                        ##########     *#",
        "#      ##***  *         ****                     **#",
        "#* **  #  *  ***      #########                  **#",
        "#* **  #      *       # @     #   *              **#",
        "#     ##              #   *   #  ***          ######",
        "#*            @       #  *    #   *        O  #    #",
        "#*                    #########                 ** #",
        "###          ****          ***                  ** #",
        "#       O                        @         O       #",
        "#   *     ##  ##  ##  ##               ###      *  #",
        "#   **         #              *       #####  O     #",
        "##  **  O   O  #  #    ***  ***        ###      ** #",
        "###               #   *****                    ****#",
        "####################################################"],
    {
        "#": Wall,
        "@": Tiger,
        "O": SmartPlantEater, // from previous exercise
        "*": Plant
    }
));