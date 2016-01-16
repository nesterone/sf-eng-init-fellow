var number = /^(\+|-)?((\d+(\.\d*)?)|(\.\d+))((e(\+|-)?)\d+)?$/i;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
    "1e+12"].forEach(function (item) {
        if (!number.test(item))
            console.log("Failed to match '" + item + "'");
    });
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
    "."].forEach(function (item) {
        if (number.test(item))
            console.log("Incorrectly accepted '" + item + "'");
    });
