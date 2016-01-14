function logFive(seq) {
    var counter = 0;
    for (var i = seq.begin(); i < seq.end(); i++) {
        console.log(seq.sequence[i]);
        counter++;
        if (counter > 4) break;
    }
}

var object = [1, 2, 3];

function ArraySeq(object) {
    this.sequence = object;
}

ArraySeq.prototype.begin = function () {
    this.idx = 0;
    return this.idx
}

ArraySeq.prototype.end = function () {
    return this.sequence.length
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);


function RangeSeq(from, to) {
    this.sequence = [];
    var c = from;
    for (var i = 0; i < (to - from); i++) {
        c = from + i;
        this.sequence.push(c);
    }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
