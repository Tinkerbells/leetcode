// https://leetcode.com/problems/swap-nodes-in-pairs/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  // let dummy: ListNode | null = new ListNode(0, head);
  let current: ListNode | null = head;
  let first: ListNode | null = head;
  let second: ListNode | null = head;
  while (current) {
    const next = second?.next?.next ?? null;
    if (first?.next) {
      first.next = next;
    }
    if (second?.next) {
      second.next = first;
    }
    current = next;
  }
  printLinkedList(current);
  return current;
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

function printLinkedList(head: ListNode | null) {
  let currentNode = head;
  const arr: number[] = [];
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  console.log(arr);
}

console.log(swapPairs(createListNode([1, 2, 3, 4])));
