/**
 * Initialize your data structure here.
 */
var MyHashMap = function (maxLength = 10000, buckets = []) {
    this.maxLength = maxLength;
    this.buckets = buckets;
};

/**
 *
 * @param {number} key
 * @returns {number}
 */
MyHashMap.prototype.getHashKey = function (key) {
    return key % this.maxLength;
};

MyHashMap.prototype.getPosInBucket = function (index, key) {
    if (this.buckets[index] == null) return -1;
    for (let i = 0; i < this.buckets[index].length; i++) {
        const element = this.buckets[index][i];
        if (element[0] === key) {
            return i;
        }
    }
    return -1;
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const hashKey = this.getHashKey(key);
    const posInBucket = this.getPosInBucket(hashKey, key);
    if (posInBucket > -1) {
        this.buckets[hashKey][posInBucket][1] = value;
    } else {
        if (this.buckets[hashKey] == null) {
            this.buckets[hashKey] = [];
        }
        this.buckets[hashKey].push([key, value]);
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const hashKey = this.getHashKey(key);
    if (this.buckets[hashKey] != null) {
        for (let i = 0; i < this.buckets[hashKey].length; i++) {
            const element = this.buckets[hashKey][i];
            if (key === element[0]) {
                return element[1];
            }
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const hashKey = this.getHashKey(key);
    if (this.buckets[hashKey] != null) {
        for (let i = 0; i < this.buckets[hashKey].length; i++) {
            const element = this.buckets[hashKey][i];
            if (key === element[0]) {
                // remove the key value pair from the array
                this.buckets[hashKey].splice(i, 1);
            }
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var obj = new MyHashMap();
obj.put(1, 1);
obj.put(2, 2);
var param_2 = obj.get(1);
var param_3 = obj.get(3);
obj.put(1, 2);
var param_4 = obj.get(2);
obj.remove(2);
var param_5 = obj.get(2);
