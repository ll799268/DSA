import ListNode from './ListNode'

/**
 * 两数相加
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode | null = null,
    tail: ListNode | null = null
  let carry: number = 0

  while (l1 || l2) {
    const n1: number = l1 ? l1.val : 0
    const n2: number = l2 ? l2.val : 0
    const sum: number = n1 + n2 + carry

    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail!.next = new ListNode(sum % 10)
      tail = tail!.next
    }
    carry = Math.floor(sum / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    tail!.next = new ListNode(carry)
  }
  return head
};