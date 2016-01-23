/**
 *  [Deep comparation](file:///projects/Eloquent-JavaScript/html/04_data.html#h_IJBU+aXOIC)
 *
 */


function deepEqual(object_1, object_2) {
    var counter_1 = 0;
    var counter_2 = 0;

    if (object_1 === object_2)
        return true;

    if (typeof object_1 != 'object' || object_1 == null ||
        typeof object_2 != 'object' || object_2 == null)
        return false;



    for (var node in object_1)
        counter_1++;

    for (var node in object_2) {
        counter_2++;
        if (!(node in object_1) || !deepEqual(object_1[node], object_2[node]))
            return false;
    }

    return counter_1 == counter_2;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


console.log(deepEqual({a: {t: {msg: "hello"}, v: "sssss"}},
    {here: {is: "an"}, object: 2}));
//→ false

console.log(deepEqual({a: {v: "sssss", t: {msg: "hello"}}},
    {a: {t: {msg: "hell"}, v: "sssss"}}));

//→ false

console.log(deepEqual({a: {t: {msg: "hello"}, v: "sssss"}},
    {a: {t: {msg: "hello"}, v: "sssss"}}));

//→ true