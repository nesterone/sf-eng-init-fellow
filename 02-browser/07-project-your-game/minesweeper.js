/**
 * Created by Iaroslav Zhbankov on 02.03.2016.
 */
function fieldCreator(sizeX, sizeY) {
    cellContentList = mineGenerator(sizeX, sizeY);
    var tableNode = document.createElement('table');
    document.body.appendChild(tableNode);
    var table = document.querySelector('table');
    for (var j = 0; j < sizeY; j++) {
        var rowNode = document.createElement('tr');
        table.appendChild(rowNode);
        for (var i = 0; i < sizeX; i++) {
            var cellNode = document.createElement('td');
            cellNode.setAttribute('id', i + j * sizeX);
            table.appendChild(cellNode);
        }
    }

    var cellList = document.querySelectorAll('td');

    for (var i = 0; i < cellList.length; i++) {
        var buttonNode = document.createElement('button');
        buttonNode.setAttribute('class', 'initial');
        buttonNode.setAttribute('id', i);
        cellList[i].appendChild(buttonNode);
    }
}

function highLiting() {
    document.body.addEventListener("mouseover", function (event) {
        if (event.target.nodeName == "BUTTON") {
            event.target.setAttribute('class', 'new');
        }
    });
    document.body.addEventListener("mouseout", function (event) {
        if (event.target.nodeName == "BUTTON") {
            event.target.setAttribute('class', 'initial');
        }
    });
}

function cellContent() {
    document.body.addEventListener("click", function (event) {
        if (event.target.nodeName == "BUTTON") {
            event.target.remove();
            var currentCell = document.querySelectorAll('td');
            for (var i = 0; i < currentCell.length; i++) {
                if (currentCell[i].id == event.target.id) {
                    currentCell[i].textContent = cellContentList[event.target.id];
                }
            }
        }

    });

}

function sizeMenu() {
    var selectNode = document.createElement('div');
    var selectName = document.createTextNode('Choose filed size:');
    selectNode.appendChild(selectName);
    document.body.appendChild(selectNode);

    var sizeNode = document.createElement('select');
    for (var i = 0; i < 3; i++) {
        var menu = document.createElement('option');
        if (i == 0) {
            var menuText = document.createTextNode('9x9');
        }
        else if (i == 1) {
            var menuText = document.createTextNode('16x16');
        }
        else if (i == 2) {
            var menuText = document.createTextNode('30x16');
        }
        menu.appendChild(menuText);
        sizeNode.appendChild(menu);
    }

    document.body.appendChild(sizeNode);
    var select = document.querySelector("select");
    select.addEventListener("change", function () {
            for (var i = 0; i < select.options.length; i++) {
                var table = document.querySelector('table');
                var option = select.options[i];
                if (option.selected) {
                    if (option.value == '9x9') {
                        sizeX = 9;
                        sizeY = 9;
                        table.remove();
                        fieldCreator(sizeX, sizeY);
                    } else if (option.value == '16x16') {
                        sizeX = 16;
                        sizeY = 16;
                        table.remove();
                        fieldCreator(sizeX, sizeY);
                    } else if (option.value == '30x16') {
                        sizeX = 30;
                        sizeY = 16;
                        table.remove();
                        fieldCreator(sizeX, sizeY);
                    }
                }

            }

        }
    );
}

function mineGenerator(sizeX, sizeY) {
    var cellsArray = new Array(sizeX * sizeY);
    var minesNumber = 0;
    if (cellsArray.length == 9 * 9) {
        minesNumber = 10;
    } else if (cellsArray.length == 16 * 16) {
        minesNumber = 40;
    }
    else if (cellsArray.length == 30 * 16) {
        minesNumber = 99;
    }
    while (minesNumber > 0) {
        var rand = Math.floor(Math.random() * (cellsArray.length + 1));
        if (cellsArray[rand] != 'buh') {
            cellsArray[rand] = 'buh';
            minesNumber--;}
    }
    return cellsArray;
}


var sizeX = 9;
var sizeY = 9;
var cellContentList = [];

highLiting();
cellContent();
sizeMenu();
fieldCreator(sizeX, sizeY);