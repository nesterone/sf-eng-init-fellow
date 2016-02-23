tools.Rectangle = function (event, cx) {
    var newRectangle = document.createElement('div');
    var pos = relativePos(event, cx.canvas);
    document.body.appendChild(newRectangle);

    trackDrag(function (event) {
            var currentPos = relativePos(event, cx.canvas);

            newRectangle.style.position = "absolute";
            newRectangle.style.left = rectangle(pos, currentPos).left + "px";
            newRectangle.style.top = rectangle(pos, currentPos).top + "px";
            newRectangle.style.width = rectangle(pos, currentPos).width + "px";
            newRectangle.style.height = rectangle(pos, currentPos).height + "px";
            newRectangle.style.background = cx.fillStyle;
            // console.log(pos.x, pos.y);
        },

        function () {
        });

    function rectangle(a, b) {
        var positions = {
            left: a.x,
            top: a.y,
            width: Math.abs(a.x - b.x) + 10,
            height: Math.abs(a.y - b.y) + 10
        };

        if (b.x <= a.x) {
            positions.left = b.x;
            positions.width = Math.abs(a.x - b.x);
        }
        if (b.y <= a.y) {
            positions.top = b.y;
            positions.height = Math.abs(a.y - b.y);
        }
        return positions;
    }

};

