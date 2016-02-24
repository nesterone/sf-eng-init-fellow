tools["Pick color"] = function (event, cx) {
    function pixelAt(cx, x, y) {
        var color = {};
        var data = cx.getImageData(x, y, 1, 1);
        color.red = data.data[0];
        color.green = data.data[1];
        color.blue = data.data[2];
        return color;
    }

    try {
        var pos = relativePos(event, cx.canvas);
        var rgbColor = pixelAt(cx, pos.x, pos.y);
        var color = 'rgb(' + rgbColor.red.toString() + ', ' +
            rgbColor.green.toString() + ', ' +
            rgbColor.blue.toString() + ')';
    }
    catch (error) {
        if (error instanceof SecurityError) {
            alert('This picture loaded from anothe domain');
        }
        else {
            throw error;
        }
    }

    cx.fillStyle = color;
    cx.strokeStyle = color;
};