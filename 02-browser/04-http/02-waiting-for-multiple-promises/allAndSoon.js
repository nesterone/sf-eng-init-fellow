function all(promises) {
    return new Promise(function(success, fail) {
        // Your code here.
    });
}

function soon(val) {
    return new Promise(function(success) {
        setTimeout(function() { success(val); },
            Math.random() * 500);
    });
}

function fail() {
    return new Promise(function(success, fail) {
        fail(new Error("boom"));
    });
}

// Test code.
all([]).then(function(array) {
    console.log("This should be []:", array);
});

all([soon(1), soon(2), soon(3)]).then(function(array) {
    console.log("This should be [1, 2, 3]:", array);
});

all([soon(1), fail(), soon(3)]).then(function() {
    console.log("We should not get here");
}, function(error) {
    if (error.message != "boom")
        console.log("Unexpected failure:", error);
});