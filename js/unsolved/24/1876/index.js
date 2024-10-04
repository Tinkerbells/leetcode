/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  const res = [];
  const n = 3;
  const first = s.slice(0, n);
  if (isGood(first)) {
    res.push(first);
  }
  for (let i = n - 1; i < s.length; i++) {
    const slice = s.slice(i, i + n);
    console.log(slice);
    if (slice.length === n && isGood(slice)) {
      res.push(slice);
    }
  }
  return s;
};

function isGood(s) {
  const a = s.split("");
  for (let i = 0; i < a.length; i++) {
    if (a.slice(i + 1).indexOf(a[i]) !== -1) {
      return false;
    }
  }
  return true;
}

console.log(countGoodSubstrings("aababcabc"));
