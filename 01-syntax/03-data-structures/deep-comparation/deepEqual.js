/**
 *  [Deep comparation](file:///projects/Eloquent-JavaScript/html/04_data.html#h_IJBU+aXOIC)
 *
 */


function deepEqual(object1, object2) {
    var counter1 = 0;
    var counter2 = 0;

    if (object1 === object2) {
        return true;
    }

    function isObject(obj) {
        if (typeof obj != 'object' || obj == null) {
            return false;
        }
        else {
            return true;
        }
    }

    if (!isObject(object1) || !isObject(object2))
        return false;


    for (var prop in object1) counter1++;

    for (var prop in object2) {
        counter2++;
        if (!(prop in object1)
            || !deepEqual(object1[prop], object2[prop])) {
            return false;
        }
    }

    return counter1 == counter2;

}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


console.log(deepEqual({
        a: {
            t: {
                msg: "hello"
            },
            v: "sssss"
        }
    },
    {
        here: {
            is: "an"
        },
        object: 2
    }));
//→ false

console.log(deepEqual({
    a: {
        v: "sssss",
        t: {
            msg: "hello"
        }
    }
}, {
    a: {
        t: {
            msg: "hell"
        },
        v: "sssss"
    }
}));

//→ false

console.log(deepEqual({
    a: {
        t: {
            msg: "hello"
        },
        v: "sssss"
    }
}, {
    a: {
        t: {
            msg: "hello"
        },
        v: "sssss"
    }
}));

//→ true