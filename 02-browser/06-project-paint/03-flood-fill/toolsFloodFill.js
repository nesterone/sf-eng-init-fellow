tools["Flood fill"] = function (event, cx) {

    var canvas = document.querySelector('canvas');
    var data = cx.getImageData(0, 0, canvas.width, canvas.height);
    var pos = relativePos(event, cx.canvas);
    var color = pixelAt(cx, pos.x, pos.y);
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

    function neiborDetermination(data, i, j) {
        var naiborList = Object.create(null);
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

        for (var count_2 = 0; count_2 <= 3; count_2++) {
            var aa = naiborList.x[count_2];
            var bb = pointsList.x;
            if (bb.forEach(function(i){})) {
                pointsList.x.push(naiborList.x[count_2]);
                pointsList.y.push(naiborList.y[count_2]);
            }

        }
    }

    neiborDetermination(data, pointsList.x[pointsList.x.length - 1], pointsList.y[pointsList.y.length - 1]);


    function colorDetermination(data, i, j) {
        if ((data.data[(i + j * canvas.width) * 4] == color.red) &&
            (data.data[(i + j * canvas.width) * 4 + 1] == color.green) &&
            (data.data[(i + j * canvas.width) * 4 + 2] == color.blue) &&
            (data.data[(i + j * canvas.width) * 4 + 3] == color.dark)) {
            return true;
        }
        return false;
    }


    for (var i = 0; i < canvas.width; i++) {
        for (var j = 0; j < canvas.height; j++) {
            if (colorDetermination(data, i, j)) {
                cx.fillRect(i, j, 1, 1);
            }
        }
    }

};