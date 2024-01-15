import ListNode from './ListNode'

/**
 * 链表的中间结点
 */
function middleNode(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  return slow
};
function middleNode1(head: ListNode | null): ListNode | null {
  let count: number = 0

  let cur: ListNode | null = head
  while (cur) {
    count++
    cur = cur.next
  }

  for (let i = 0; i < Math.floor(count / 2); i++) {
    head = head!.next
  }

  return head
};