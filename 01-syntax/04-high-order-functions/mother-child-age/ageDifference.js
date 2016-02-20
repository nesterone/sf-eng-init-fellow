function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

var age = 0, count = 0;
for (var i = 0; i < ancestry.length; i++)
    for (var j = 0; j < ancestry.length; j++) {
        if (ancestry[i].name == ancestry[j].mother) {
            count = count + 1;
            age = age + (ancestry[j].born - ancestry[i].born)
        }
    }

console.log(age / (count));


// → 31.2