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
    },


    /**
     * Cut of any count of spaces from the beginning and from the end of the string
     * @param {String} str
     * @return {String}
     */

    trim: function (str) {
    },

    /**
     * Reverses a specified list.
     * @param {Array} list - a list to be reversed, may be empty.
     * @return {Array} - the same instance of list but reverted
     */

    reverse: function (list) {
    },

    /**
     *  Change each list's element by applying handler
     *  @params {Array|Object} list - input sequence
     *  @params {Function} iterator  - some rule which changes each element
     *  @return {Array} new list with changes elements
     */


    map: function (list, iterator) {
    },


    /**
     * Group some input sequence of element by some rule
     * @param {Array} list - input sequence
     * @param {Function} iterator -  provide group id for each element
     * @return {Object} object of group id properties which point to arrays of element from input sequence
     */

    groupBy: function (list, iterator) {
    },


    /**
     * Creates a version of the function that can only be called one time.
     * Repeated calls to the modified function will have no effect.
     * @param {Function} func - your target function
     * @return {Function} new  function which could be invoked only once
     */

    once: function (func) {
    },

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

    //TODO: provide JsDocs description

    same: function (listOne, listTwo) {
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
