import ListNode from './ListNode'

/**
 * 相交链表
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null
  }

  let cA: ListNode | null = headA
  let cB: ListNode | null = headB
  while (cA !== cB) {
    cA = cA === null ? headB : cA.next
    cB = cB === null ? headA : cB.next
  }

  return cA
};