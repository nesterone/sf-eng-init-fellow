tools["Flood fill"] = function (event, cx) {

    var canvas = document.querySelector('canvas');
    var data = cx.getImageData(0, 0, canvas.width, canvas.height);
    var pos = relativePos(event, cx.canvas);
    var color = pixelAt(cx, pos.x, pos.y);
    var workList = {x: [], y: [], side: []};
    var firstPoint = startPoint(data, pos.x, pos.y);
    var newPointsList = {x: [firstPoint.x], y: [firstPoint.y], side: ['0']};

    function startPoint(data, i, j) {
        while ((colorDetermination(data, i, j - 1)) && (j > 0)) {
            j = j - 1;
        }
        return {x: i, y: j};
    }

    function pixelAt(cx, x, y) {
        var color = {};
        var data = cx.getImageData(x, y, 1, 1);
        color.red = data.data[0];
        color.green = data.data[1];
        color.blue = data.data[2];
        color.dark = data.data[3];
        return color;
    }

    function colorDetermination(data, i, j) {
        if ((data.data[(i + j * canvas.width) * 4] == color.red) &&
            (data.data[(i + j * canvas.width) * 4 + 1] == color.green) &&
            (data.data[(i + j * canvas.width) * 4 + 2] == color.blue) &&
            (data.data[(i + j * canvas.width) * 4 + 3] == color.dark)) {
            return true;
        }
        return false;
    }

    function addPoints(data, i, j, side) {
        while ((colorDetermination(data, i, j + 1)) && (j < canvas.height)) {
            searchPointsLeft(data, i, j, side);
            searchPointsRight(data, i, j, side);
            workList.x.push(i);
            workList.y.push(j);
            j++;
        }
    }

    function searchPointsLeft(data, i, j, side) {
        if ((colorDetermination(data, i - 1, j)) && (j - 1 < 0) && (i > 0) && ((side == '0') || (side == 'left'))) {
            newPointsList.x.push(i - 1);
            newPointsList.y.push(j);
            newPointsList.side.push('left');
        } else if ((colorDetermination(data, i - 1, j)) && (!(colorDetermination(data, i, j - 1))) && (j > 0) &&
            (i > 0) && ((side == '0') || (side == 'left'))) {
            var a = startPoint(data, i - 1, j);
            if ((j - a.y > 2) && ((colorDetermination(data, a.x + 1, a.y)))) {
                newPointsList.x.push(a.x + 1);
                newPointsList.y.push(a.y);
                newPointsList.side.push('right');
                newPointsList.x.push(a.x);
                newPointsList.y.push(a.y);
                newPointsList.side.push('left');
            } else {
                newPointsList.x.push(a.x);
                newPointsList.y.push(a.y);
                newPointsList.side.push('left');
            }
        } else if ((colorDetermination(data, i - 1, j)) && (!(colorDetermination(data, i - 1, j - 1))) && (colorDetermination(data, i, j - 1)) &&
            (i > 0) && ((side == 'left') || (side == '0'))) {
            newPointsList.x.push(i - 1);
            newPointsList.y.push(j);
            newPointsList.side.push('left');
        } else if ((colorDetermination(data, i - 1, j)) && (!(colorDetermination(data, i, j - 1))) && (!(colorDetermination(data, i - 1, j - 1))) &&
            (i > 0) && ((side == 'left') || (side == '0'))) {
            newPointsList.x.push(i - 1);
            newPointsList.y.push(j);
            newPointsList.side.push('left');
        }
    }

    function searchPointsRight(data, i, j, side) {
        if ((colorDetermination(data, i + 1, j)) && (j - 1 < 0) && (i < canvas.width) && ((side == '0') || (side == 'right'))) {
            newPointsList.x.push(i + 1);
            newPointsList.y.push(j);
            newPointsList.side.push('right');
        } else if ((colorDetermination(data, i + 1, j)) && (!(colorDetermination(data, i, j - 1))) && (j > 0) &&
            (i < canvas.width) && ((side == '0') || (side == 'right'))) {
            var a = startPoint(data, i + 1, j);
            newPointsList.x.push(a.x);
            newPointsList.y.push(a.y);
            newPointsList.side.push('right');
        } else if ((colorDetermination(data, i + 1, j)) && (!(colorDetermination(data, i + 1, j - 1))) && (colorDetermination(data, i, j - 1)) &&
            (i < canvas.width) && ((side == 'right') || (side == '0'))) {
            newPointsList.x.push(i + 1);
            newPointsList.y.push(j);
            newPointsList.side.push('right');
        }  else if ((colorDetermination(data, i + 1, j)) && (!(colorDetermination(data, i, j - 1))) && (!(colorDetermination(data, i + 1, j - 1))) &&
            (i < canvas.width) && ((side == 'right') || (side == '0'))) {
            newPointsList.x.push(i + 1);
            newPointsList.y.push(j);
            newPointsList.side.push('right');
        }
    }

    function workListCreator(data) {
        while (newPointsList.x.length > 0) {
            var cX = newPointsList.x.splice(0, 1);
            var cY = newPointsList.y.splice(0, 1);
            var cSide = newPointsList.side.splice(0, 1);
            addPoints(data, cX[0], cY[0], cSide[0]);
        }
    }

    workListCreator(data);

    for (var i = 0; i < workList.x.length; i++) {
        cx.fillRect(workList.x[i], workList.y[i], 1, 1);
    }

};