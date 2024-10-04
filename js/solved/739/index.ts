// https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
  const res: number[] = Array(temperatures.length).fill(0);
  const stack: number[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop()!;
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
