/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var hash = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const hashKey = str.split('').sort().join('');
        if (hash[hashKey] != undefined) {
            hash[hashKey].push(str);
        } else {
            hash[hashKey] = [];
            hash[hashKey].push(str);
        }
    }

    var output = [];
    for (const str in hash) {
        if (Object.hasOwnProperty.call(hash, str)) {
            const key = hash[str];
            output.push(key);
        }
    }
    return output;
};
var inputArr = ["eat","tea","tan","ate","nat","bat"];
var result = groupAnagrams(inputArr);
console.log(result);

// https://leetcode.com/explore/learn/card/hash-table/185/hash_table_design_the_key/1124/