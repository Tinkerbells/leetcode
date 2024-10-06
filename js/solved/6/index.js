// https://leetcode.com/problems/zigzag-conversion/description/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let result = Array.from({ length: numRows }).fill("");
  const steps = numRows - 1;
  let isDown = false;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    result[j] += s[i];
    if (i % steps === 0) {
      isDown = !isDown;
    }
    if (isDown) {
      j++;
    } else {
      j--;
    }
  }
  return result.join("");
};

console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
