/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
    this.hash = {};
    this.arr = [];
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    this.arr.push(number);
    if (this.hash[number] == undefined) {
        this.hash[number] = 0;
    }
    this.hash[number]++;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    if (this.arr.length < 2) {
        return false;
    }
    for (let i = 0; i < this.arr.length; i++) {
        var diff = value - this.arr[i];
        if (this.hash[diff] != undefined) {
            if (this.hash[diff] > 1) {
                return true;
            } else if (this.hash[diff] === 1 && this.arr[i] !== diff) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(0)
 * var param_2 = obj.find(value)
 */

var obj = new TwoSum();
obj.add(0);
obj.add(0);
var param_2 = obj.find(0);
