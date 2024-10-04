// https://leetcode.com/problems/reverse-integer/

function reverse(x: number): number {
  const limits = [Math.pow(-2, 31), Math.pow(2, 31) - 1];
  let minus = x < 0 ? "-" : "";
  let res = parseInt(minus + String(x).split("").reverse().join(""));
  if (res < limits[0] || res > limits[1]) {
    return 0;
  }
  return res;
}

console.log(reverse(123) === 321);
