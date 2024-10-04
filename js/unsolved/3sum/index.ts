// https://leetcode.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = 1;
    let k = nums.length - 1;
    while (j < k) {
      const target = nums[i] + nums[j] + nums[k];
      if (target < 0) {
        k--;
      } else if (target > 0) {
        j++;
      } else {
        const triplet = [nums[i], nums[j], nums[k]];
        res.push(triplet);
        if nums[j] !== 
      }
    }
  }
  return [[0]];
}

console.log("\n\n\n---------------------\n", threeSum([-1, 0, 1, 2, -1, -4]));
