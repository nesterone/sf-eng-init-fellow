tools["Flood fill"] = function (event, cx) {
    var canvas = document.querySelector('canvas');
    var data = cx.getImageData(0, 0, canvas.width, canvas.height);
    var pos = relativePos(event, cx.canvas);
    var color = pixelAt(cx, pos.x, pos.y);
    var workArray = new Array(canvas.width * canvas.height);
    var pointsList = {x: [pos.x], y: [pos.y]};

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
            (data.data[(i + j * canvas.width) * 4 + 3] == color.dark) &&
            (i > 0) && (i < canvas.width) && (j > 0) && (j < canvas.height)) {
            return true;
        }
        return false;
    }

    function neiborDetermination(data, i, j) {
        var naiborList = {};
        naiborList.x = [];
        naiborList.y = [];
        if (colorDetermination(data, i - 1, j)) {
            naiborList.x.push(i - 1);
            naiborList.y.push(j);
        }
        if (colorDetermination(data, i + 1, j)) {
            naiborList.x.push(i + 1);
            naiborList.y.push(j);
        }
        if (colorDetermination(data, i, j - 1)) {
            naiborList.x.push(i);
            naiborList.y.push(j - 1);
        }
        if (colorDetermination(data, i, j + 1)) {
            naiborList.x.push(i);
            naiborList.y.push(j + 1);
        }
        for (var i = 0; i < naiborList.x.length; i++) {
            if ((workArray[naiborList.x[i] + naiborList.y[i] * canvas.width] != true)) {
                pointsList.x.push(naiborList.x[i]);
                pointsList.y.push(naiborList.y[i]);
                workArray[naiborList.x[i] + naiborList.y[i] * canvas.width] = true;
                cx.fillRect(naiborList.x[i], naiborList.y[i], 1, 1);
            }
        }
    }

    for (var i = 0; i < pointsList.x.length; i++) {
        neiborDetermination(data, pointsList.x[i], pointsList.y[i]);
    }
};