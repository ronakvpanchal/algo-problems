/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    var digits = n.toString();
    var sum = calcSquareSum(digits);
    var hash = { sum: true };

    while (sum !== 1) {
        sum = calcSquareSum(sum.toString());
        if (hash[sum]) {
            return false;
        }
        hash[sum] = true;
    }
    return true;
};

var calcSquareSum = function (digits) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        var element = digits[i];
        sum += element * element;
    }
    console.log(`${digits} results ${sum}`);
    return sum;
};

let result = isHappy(1111111);
console.log(result);

// https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1131/
