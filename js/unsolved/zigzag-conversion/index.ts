//https://leetcode.com/problems/zigzag-conversion/description/

function convert(s: string, numRows: number): string {
  let res = s[0];
  let k = numRows + 1;
  for (let i = 1; i < s.length; i++) {
    let step = i;
    while (s[step] !== undefined) {
      if (step === 1) {
        step = step * k + 1;
      }
      res += s[step];
      console.log(res);
      step = step * k + 1;
    }
    s.slice(i, s.length);
    k--;
    console.log(step);
  }
  return s;
}

console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
