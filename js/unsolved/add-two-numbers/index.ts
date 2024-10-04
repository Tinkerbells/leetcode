//leetcode.com/problems/add-two-numbers/
("use strict");

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const sum = sumListNode(l1) + sumListNode(l2);
  console.log(sum.toFixed(2));
  return createListNode(Array.from(String(sum), Number).reverse());
}

function sumListNode(l: ListNode | null): number {
  if (l === null) {
    return 0;
  }
  let res: number[] = [];
  let current = l;
  while (current.next != null && !isNaN(current.next.val)) {
    res.push(current.val);
    current = current.next;
  }
  res.push(current.val);
  return res.map((v, index) => v * Math.pow(10, index)).reduce((a, b) => a + b);
}

function createListNode(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

const testListNode1 = createListNode([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
console.log("test 1: ", testListNode1);
const testListNode2 = createListNode([5, 6, 4]);

console.log("Result: ", addTwoNumbers(testListNode1, testListNode2));
