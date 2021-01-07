var TrieNode = function () {
    this.children = {};
    this.score = 0;
};

/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.map = {};
    this.root = new TrieNode();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    let diff = this.map[key] == null ? 0 : this.map[key];
    let delta = val - diff;
    this.map[key] = val;
    let current = this.root;
    current.score += delta;
    for (let c of key) {
        if (current.children[c] == null) {
            current.children[c] = new TrieNode();
        }
        current = current.children[c];
        current.score += delta;
    }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let current = this.root;
    let result = 0;
    for (let c of prefix) {
        if (current && current.children[c] == null) {
            result = 0;
            break;
        } else {
            result = current.children[c].score;
        }
        current = current.children[c];
    }
    return result;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
