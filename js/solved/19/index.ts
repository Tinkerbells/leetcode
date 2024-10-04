// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;
  let firstPointer: ListNode | null = dummy;
  let secondPointer: ListNode | null = dummy;

  for (let i = 0; i < n; i++) {
    firstPointer = firstPointer?.next ?? null;
  }

  while (firstPointer?.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer?.next ?? null;
  }

  secondPointer!.next = secondPointer?.next?.next ?? null;

  return dummy.next;
}

function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let currentNode = head;

  for (let i = 1; i < values.length; i++) {
    currentNode.next = new ListNode(values[i]);
    currentNode = currentNode.next;
  }

  return head;
}

function printLinkedList(head: ListNode | null) {
  let currentNode = head;
  const arr: number[] = [];
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  console.log(arr);
}

console.log(removeNthFromEnd(createLinkedList([1, 2, 3, 4, 5]), 2));
