// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

function letterCombinations(digits: string): string[] {
  const keyboard = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const arrays: string[][] = [];

  for (const char of digits.split("")) {
    arrays.push(keyboard[char]);
  }

  const res = mixArraysIteratively(arrays);

  return res.length > 1 ? res : [];
}

function mixArraysIteratively(arrays: string[][]): string[] {
  return arrays.reduce(
    (accumulator, currentArray) => {
      const result: string[] = [];
      for (const prefix of accumulator) {
        for (const suffix of currentArray) {
          result.push(prefix + suffix);
        }
      }
      return result;
    },
    [""],
  );
}

console.log(letterCombinations(""), [
  "ad",
  "ae",
  "af",
  "bd",
  "be",
  "bf",
  "cd",
  "ce",
  "cf",
]);
