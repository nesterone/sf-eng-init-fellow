module.exports = {

    /**
     * Sort given array by provided rule in comparator function
     * @param {Array} list
     * @param {Function} comparator
     */

    sort: function (list, comparator) {
        function comparator(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
        }

        list.sort(comparator);
        return list;
    },

    /**
     * Make first letter of given string upper case
     * @param {String} string
     * @return {String} capitalized string
     */

    capitalize: function (string) {
        var tank = string[0].toUpperCase();
        for (var i = 1; i < string.length; i++) {
            var tank = tank + string[i];
        }
        return tank;

    },

    /**
     * Camelize given string or array of string
     * @param {Array|String} sequence
     * @return {String} capitalized string
     */

    camelize: function (sequence) {
        if (typeof sequence == 'string') {
            var arrayOfStrings = sequence.split(' ');
        } else if (typeof sequence == 'object') {
            var arrayOfStrings = sequence;
        }

        for (var i = 0; i < arrayOfStrings.length; i++) {
            var tank = arrayOfStrings[i][0].toUpperCase();
            for (var j = 1; j < arrayOfStrings[i].length; j++) {
                var tank = tank + arrayOfStrings[i][j];
            }
            arrayOfStrings[i] = tank;
        }

        return arrayOfStrings.join('');
    },


    /**
     * Cut of any count of spaces from the beginning and from the end of the string
     * @param {String} str
     * @return {String}
     */

    trim: function (str) {
        var i = 0;
        var j = str.length;
        while (str[i] == ' ')
            i++;
        if (str[str.length - 1] == ' ') {
            var j = str.length - 1;
            while (str[j] == ' ')
                j--;
        }
        return str.substring(i, j + 1);
    },

    /**
     * Reverses a specified list.
     * @param {Array} list - a list to be reversed, may be empty.
     * @return {Array} - the same instance of list but reverted
     */

    reverse: function (list) {
        var tankA;
        var n = list.length - 1;
        for (var i = 0; i <= Math.floor(n / 2); i++) {
            tankA = list[i];
            list[i] = list[n - i];
            list[n - i] = tankA;
        }
        return list;
    },

    /**
     *  Change each list's element by applying handler
     *  @params {Array|Object} list - input sequence
     *  @params {Function} iterator  - some rule which changes each element
     *  @return {Array} new list with changes elements
     */


    map: function (list, iterator) {
        function iterator(a, b) {
            return a * b;
        }

        for (var i = 0; i < list.length; i++) {
            list[i] = iterator(list[i], 2);
        }
        return list;
    },


    /**
     * Group some input sequence of element by some rule
     * @param {Array} list - input sequence
     * @param {Function} iterator -  provide group id for each element
     * @return {Object} object of group id properties which point to arrays of element from input sequence
     */

    groupBy: function (list, iterator) {
        var result = {
            "even": [],
            "odd": []
        };

        function iterator(listElement) {
            if (listElement % 2 == 0) {
                return 'even';
            }
            else {
                return 'odd';
            }
        }

        for (var i = 0; i < list.length; i++) {
            if (iterator(list[i]) == "even") {
                result.even.push(list[i]);
            } else if (iterator(list[i]) == "odd") {
                result.odd.push(list[i]);
            }

        }
        return result;

    },


    /**
     * Creates a version of the function that can only be called one time.
     * Repeated calls to the modified function will have no effect.
     * @param {Function} func - your target function
     * @return {Function} new  function which could be invoked only once
     */

    once: func = (function () {
        var executing = false;
        return function () {
            if (!executing) {
                executing = true;
                return "executing first time";
            }
            else if (executing) {
                return "already executed";
            }
        }
    })(),

    /**
     * Creates and returns a new debounced version of the passed function
     * which will postpone its execution until after wait milliseconds
     * have elapsed since the last time it was invoked.
     * @param {Function} func - your target function
     * @param {Number} wait -  milliseconds have elapsed since the last time it was invoked
     * @return {Function} new debounced version of the passed function
     */

    debounce: function (func, wait) {
    },

    /**
     * Compare two lists
     * @param {Array} listOne - the first list
     * @param {Array} listTwo - the second list
     * @return {} result of comparison
     */

    same: function (listOne, listTwo) {
        if ((typeof listOne == typeof listTwo) && (listOne.length = listTwo.length)) {
            for (var i = 0; i < listOne.length; i++) {
                if (listOne[i] != listTwo[i]) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    },

    //TODO: provide JsDocs description

    isArray: function (obj) {
    },

    //TODO: provide JsDocs description

    isObject: function (obj) {
    },

    //TODO: provide JsDocs description

    isString: function (obj) {
    }

};
