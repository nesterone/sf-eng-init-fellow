var size = 8;
for (var j = 1; j <= size; j++) {
    var row = '';
    for (var i = 1; i <= size; i++) {
        if ((i + j) % 2 != 0)
            row = row + '#';
        else row = row + ' ';
    }
    console.log(row);
}