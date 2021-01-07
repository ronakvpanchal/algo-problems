/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var map_s = {};
    var map_t = {};

    for (let i = 0; i < s.length; i++) {
        const char_s = s[i];
        const char_t = t[i];
        if (map_s[char_s] != null && map_s[char_s] !== char_t) {
            return false;
        } else if (map_t[char_t] != null && map_t[char_t] !== char_s) {
            return false;
        } else {
            map_s[char_s] = char_t;
            map_t[char_t] = char_s;
        }
    }

    return true;
};

var result = isIsomorphic("acb", "dcb");
console.log(result);

// https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1117/
