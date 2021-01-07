/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  var currentPos = this.root;
  for (var i = 0; i < word.length; i++) {
    var chara = word[i];
    if (currentPos[chara] == null) {
      currentPos[chara] = { chara };
    }
    currentPos = currentPos[chara];
  }
  currentPos.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.startsWith = function (word, currentPos = this.root) {
  for (var i = 0; i < word.length; i++) {
    var chara = word[i];
    if (currentPos[chara] && currentPos[chara].chara === chara) {
      return this.startsWith(
        word.substring(i + 1, word.length),
        currentPos[chara]
      );
    } else {
      return false;
    }
  }

  return true;
};

var x = new Trie();
x.insert("apple");
console.log(JSON.stringify(x));
