function Node(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

Node.prototype.add = function (x) {
    if (!this) {
        return new Node(x);
    }
    if (x === this.val) {
        return this;
    } else if (x < this.val) {
        this.left = this.left != null ? this.left.add(x) : new Node(x);
    } else if (x > this.val) {
        this.right = this.right != null ? this.right.add(x) : new Node(x);
    }
    return this;
};

Node.prototype.predecessor = function () {
    let node = this.left;
    while (node.right) {
        node = node.right;
    }
    return node.val;
};

Node.prototype.successor = function () {
    let node = this.right;
    while (node.left) {
        node = node.left;
    }
    return node.val;
};

Node.prototype.remove = function (x) {
    if (!this) {
        return null;
    }
    if (x === this.val) {
        if (this.right != null) {
            // find the successor
            let newVal = this.successor(this.val);
            this.val = newVal;
            this.right = newVal ? this.right.remove(newVal) : null;
        } else if (this.left != null) {
            // find the predesessor
            let newVal = this.predecessor();
            this.val = newVal;
            this.left = newVal ? this.left.remove(newVal) : null;
        } else {
            return null;
        }
    } else {
        if (x > this.val) {
            this.right = this.right ? this.right.remove(x) : null;
        } else if (x < this.val) {
            this.left = this.left ? this.left.remove(x) : null;
        }
    }
    return this;
};

Node.prototype.contains = function (x) {
    if (!this) {
        return false;
    }

    if (this.val === x) {
        return true;
    }

    if (x < this.left) {
        return this.left != null && this.left.contains(x);
    } else if (x > this.right) {
        return this.right != null && this.right.contains(x);
    }
};

/**
 * @return {void}
 */
const MyHashSet = function () {
    this.hashSet = new Array(769).fill(null);
};

/** Hash Set
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (!this.hashSet[key % 769]) {
        this.hashSet[key % 769] = new Node(key);
    } else {
        this.hashSet[key % 769].add(key);
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    if (!this.hashSet[key % 769]) return;
    this.hashSet[key % 769] = this.hashSet[key % 769].remove(key);
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    if (!this.hashSet[key % 769]) return false;
    return this.hashSet[key % 769].contains(key);
};
