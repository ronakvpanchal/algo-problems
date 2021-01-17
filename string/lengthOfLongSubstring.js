/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length;
      }
    
      let longestString = "";
      let str = "";
      let hash = {};
      for (let j = 0; j < s.length; j++) {
        for (let i = j; i < s.length; i++) {
          const ch = s[i];
    
          if (hash[ch] == undefined) {
            hash[ch] = true;
            str = str.concat(ch);
          } else {
            if (longestString.length < str.length) {
              longestString = str;
            }
            hash = {};
            str = "";
            break;
          }
        }
      }
    
      return longestString.length;
};

lengthOfLongestSubstring("dvdf");
