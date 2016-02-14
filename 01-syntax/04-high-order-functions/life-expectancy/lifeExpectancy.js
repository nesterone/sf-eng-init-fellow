function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var counter = 0, age = 0;
for (var j = 15; j < 22; j++) {
    for (var i = 0; i < ancestry.length; i++) {
        if (Math.ceil(ancestry[i].died / 100) == j) {
            age = age + (ancestry[i].died - ancestry[i].born);
            counter = counter + 1;
        }
    }
    console.log('In', j, 'century leave', counter, 'persons with average age', age / counter);
    counter = 0;
    age = 0;
}
;

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94