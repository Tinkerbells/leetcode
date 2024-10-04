// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) {
    return 1;
  }
  let sub = s[0];
  let length = 0;
  for (let i = 1; i < s.length; i++) {
    if (sub.indexOf(s[i]) < 0) {
      sub += s[i];
    } else {
      if (length < sub.length) {
        length = sub.length;
      }
      sub = s[i];
    }
  }
  if (sub && (sub === s || sub.length > length)) {
    length = sub.length;
  }
  return length;
}

console.log(lengthOfLongestSubstring(""));
