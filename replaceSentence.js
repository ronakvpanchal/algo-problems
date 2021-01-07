var TrieNode = function () {
    this.children = {};
    this.times = 0;
};

var DataStore = function () {
    this.root = new TrieNode();
};

DataStore.prototype.insertPrefix = function (prefix, times) {
    let cur = this.root;
    let acc = "";

    for (let c of prefix) {
        acc += c;
        if (cur.children[acc] == null) {
            cur.children[acc] = new TrieNode();
        }
        cur.times += times;
        cur = cur.children[acc];
    }
};

DataStore.prototype.traverseToLastNode = function (currNode) {
    var returnVal = "";

    for (let key in currNode.children) {
        let loopReturn = "";
        let childKeys = Object.keys(currNode.children[key].children);
        if (childKeys.length === 0) {
            // returnVal += " " + key;
            debugger;
            console.log(key);
            continue;
        } else {
            this.traverseToLastNode(currNode.children[key]);
        }
    }

    return returnVal;
};

DataStore.prototype.getPrefix = function (word) {
    let cur = this.root;
    let result = word;
    let acc = "";

    for (let c of word) {
        if (cur.children[c] == null) {
            break;
        }
        acc += c;
        cur = cur.children[c];

        if (cur && cur.isPrefix) {
            break;
        }
    }

    if (cur && cur.isPrefix) {
        result = acc;
    }
    return result;
};

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, times) {
    this.dataStore = new DataStore();
    this.searchText = "";

    for (let index = 0; index < dictionary.length; index++) {
        let sentence = dictionary[index];
        this.dataStore.insertPrefix(sentence, times[index]);
    }

    let lastnode = this.dataStore.traverseToLastNode(this.dataStore.root);
    console.log(lastnode);
    // var x = {};
    // var y = Object.keys(x);
    // console.log(Object.keys(x));
};

var result = replaceWords(
    [
        "i am ironman",
        "i ap",
        "i like coding",
        "i like pizza",
        "ironman",
        "i am awesome",
    ],
    [3, 1, 1, 5, 7]
);

var input = function (c) {
    let result = [];
    if (c != "#") {
        this.searchText += c;

        let curr = this.dataStore.root;

        for (let index = 0; index < this.searchText.length; index++) {
            let char = this.searchText[index];
            if (curr.children[char] != null) {
                curr = curr.children[char];
            } else {
                return [];
            }
        }

        // traverse from curr to the end of the nodes of trei
    }
};

console.log(result);
