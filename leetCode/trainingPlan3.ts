import ListNode from './ListNode'

/**
 * 训练计划III
 */
function trainningPlan(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null
  let cur: ListNode | null = head

  while (cur) {
    const next: ListNode | null = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
};