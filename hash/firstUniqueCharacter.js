/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    const pos = 0;
    for (const char of map) {
        const count = char[1];
        if (count === 1) {
            return pos;
        }
        pos++;
    }
    return -1;
};

var result = firstUniqChar("leetcode");
console.log(result);

// https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1120/
