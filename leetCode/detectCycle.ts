import ListNode from './ListNode'

/**
 * 环形链表II
 */
function detectCycle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next

    if (slow === fast) {
      slow = head

      while (slow !== fast) {
        slow = slow!.next
        fast = fast!.next
      }

      return slow
    }
  }

  return null
};