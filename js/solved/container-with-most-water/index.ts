// https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
  let k = height.length - 1;
  let j = 0;
  let size = 0;
  let left = 0;
  let right = 0;

  while (j <= k) {
    left = height[j];
    right = height[k];
    const h = Math.min(left, right);
    const w = k - j;
    size = Math.max(size, h * w);
    if (left < right) {
      j++;
    } else {
      k--;
    }
  }
  return size;
}

console.log(maxArea([1, 2, 1, 1]) === 3);
