// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let l = 0;
  let r = 0;
  let longest = 0;
  while (r < s.length) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      r++;
    } else {
      set.delete(s[l]);
      l++;
    }
    longest = Math.max(longest, set.size);
  }
  console.log(set);
  return longest;
};

console.log(lengthOfLongestSubstring("dvdf"));
