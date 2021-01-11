/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
    let hash = {};
    for (let i = 0; i < strings.length; i++) {
        const str = strings[i];
        const key = calcKey(str);

        if (hash[key] == undefined) {
            hash[key] = [];
        }
        hash[key].push(str);
    }

    const output = [];
    for (let strArr in hash) {
        output.push(hash[strArr]);
    }

    let mySet = new Set();

    mySet.add(1); // Set [ 1 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add("some text"); // Set [ 1, 5, 'some text' ]
    let o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

    mySet.has(1); // true
    mySet.has(3); // false, since 3 has not been added to the set
    mySet.has(5); // true
    mySet.has(Math.sqrt(25)); // true
    mySet.has("Some Text".toLowerCase()); // true

    for (let item of mySet.entries()) {
        console.log(item);
    }

    return output;
};

var calcKey = function (str) {
    var res = [];

    for (let i = 1; i < str.length; i++) {
        const c = (str.charCodeAt(i) - str.charCodeAt(0) + 26) % 26;
        res.push(c);
    }

    return res.join("_");
};

var inputArr = ["abc", "bcd", "xyz", "ac", "xz"];
var result = groupStrings(inputArr);
console.log(result);
