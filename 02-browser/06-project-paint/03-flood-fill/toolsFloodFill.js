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

        for (var k = 0; k < naiborList.x.length; k++) {
            if (!isIn(pointsList.x,pointsList.y,naiborList.x[k],naiborList.y[k])) {
                pointsList.x.push(naiborList.x[k]);
                pointsList.y.push(naiborList.y[k]);
            }
        }

    }

    function isIn(arrx, arry, bx, by) {
        var counter = 0;
        for (var i = 0; i < arrx.length; i++)
            if ((arrx[i] == bx) && (arry[i] == by)) {
                counter++;
            }
        if (counter > 0)
            return true;
        else return false;
    }

    for (var l = 0; l < pointsList.x.length; l++) {
        neiborDetermination(data, pointsList.x[l], pointsList.y[l]);
    }

    console.log(pointsList);


    function colorDetermination(data, i, j) {
        if ((data.data[(i + j * canvas.width) * 4] == color.red) &&
            (data.data[(i + j * canvas.width) * 4 + 1] == color.green) &&
            (data.data[(i + j * canvas.width) * 4 + 2] == color.blue) &&
            (data.data[(i + j * canvas.width) * 4 + 3] == color.dark)) {
            return true;
        }
        return false;
    }


    for (var i = 0; i < pointsList.x.length; i++) {
        cx.fillRect(pointsList.x[i], pointsList.y[i], 1, 1);
    }


};