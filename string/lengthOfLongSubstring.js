/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let count = 0;
    let maxCount = 0;
    let hash = {};
    if (s.length === 1 || s.length === 0) {
        return s.length;
    }

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] == undefined) {
            hash[s[i]] = true;
            count++;
        } else {
            hasDuplicates = true;
            if (count > maxCount) {
                maxCount = count;
            }
            hash = {};
            count = 1;
            hash[s[i]] = true;
        }
    }

    if (count > maxCount) {
        maxCount = count;
    }

    return maxCount;
};

lengthOfLongestSubstring("dvdf");
