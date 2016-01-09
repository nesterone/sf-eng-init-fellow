var char = '';
var width = 10;
for (var i = 0; i <= width; i++) {
    for (var j = 0; j <= width; j++) {
        if ((j > (width / 2 - i)) && (j < width / 2 + i)) {
            char += '#';
        }
        else
            char += ' ';
    }
    console.log(char);
    char = '';
}

