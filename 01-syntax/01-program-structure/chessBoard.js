var n  = 8;
for (var j = 1; j <= n; j++){
    var b = '';
    for (var i = 1; i <= n; i++){
        if ((i + j) % 2 != 0)
            b = b + '#';
        else b = b + ' ';}
    console.log(b);
}