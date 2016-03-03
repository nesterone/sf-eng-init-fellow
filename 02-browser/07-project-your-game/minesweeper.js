/**
 * Created by Iaroslav Zhbankov on 02.03.2016.
 */

var sizeX = 9;
var sizeY = 9;
var cellContentList = [];
var minesList = [];

document.oncontextmenu = cmenu;
function cmenu() {
    return false;
}
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
        if ((event.target.nodeName == "BUTTON") && (event.target.getAttribute('class') != 'marked')) {
            event.target.setAttribute('class', 'new');
        }
    });
    document.body.addEventListener("mouseout", function (event) {
        if ((event.target.nodeName == "BUTTON") && (event.target.getAttribute('class') != 'marked')) {
            event.target.setAttribute('class', 'initial');
        }
    });
}

function cellContent() {
    document.body.addEventListener("click", function (event) {
        if ((event.target.nodeName == "BUTTON") && (event.target.getAttribute('class') != 'marked')) {
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

function minesMarker() {
    document.body.addEventListener("mousedown", function (event) {
        if ((event.target.nodeName == "BUTTON") && (event.which == 3) && (event.target.getAttribute('class') != 'marked')) {
            event.target.setAttribute('class', 'marked');
            minesList.push(event.target.id);
            var divElement = document.querySelectorAll('div');
            divElement[2].textContent = minesList.length;
        } else if ((event.target.nodeName == "BUTTON") && (event.which == 3) && (event.target.getAttribute('class') == 'marked')) {
            event.target.setAttribute('class', 'initial');
            var position = minesList.indexOf(event.target.id);
            minesList.splice(position, 1);
            var divElement = document.querySelectorAll('div');
            divElement[2].textContent = minesList.length;
        }
    });
}

function sizeMenu() {
// create menu text
    var menuNode = document.createElement('div');
    document.body.appendChild(menuNode);

    var selectNode = document.createElement('th');
    var selectName = document.createTextNode('Choose filed size:');
    selectNode.appendChild(selectName);
    menuNode.appendChild(selectNode);

    var minesCountNode = document.createElement('th');
    var minesCountNodeName = document.createTextNode('Mines number:');
    minesCountNode.appendChild(minesCountNodeName);
    menuNode.appendChild(minesCountNode);

    var timeCountNode = document.createElement('th');
    var timeCountNodeName = document.createTextNode('Time:');
    timeCountNode.appendChild(timeCountNodeName);
    menuNode.appendChild(timeCountNode);

// create menu content
    var selectNodeDiv = document.createElement('div');

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
    selectNodeDiv.appendChild(sizeNode);

    var minesCounterNode = document.createElement('div');
    minesCounterNode.textContent = minesList.length;
    selectNodeDiv.appendChild(minesCounterNode);
    document.body.appendChild(selectNodeDiv);

    var divElement = document.querySelectorAll('div');
    divElement[0].setAttribute('class', 'center');
    divElement[1].setAttribute('class', 'center');
    divElement[2].setAttribute('style', 'margin: -20px 0 0 235px;');

// create select event
    var select = document.querySelector("select");
    select.setAttribute('style', 'margin: 30px 0 0 75px;');
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
            minesNumber--;
        }
    }
    return cellsArray;
}


highLiting();
cellContent();
minesMarker();
sizeMenu();
fieldCreator(sizeX, sizeY);