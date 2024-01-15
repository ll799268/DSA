import ListNode from './ListNode'

/**
 * 训练计划IV
 */
function trainingPlan(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let cur: ListNode | null = new ListNode()
  let head: ListNode | null = cur

  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
  }

  if (!l1) cur.next = l2
  if (!l2) cur.next = l1

  return head.next
};

function trainingPlan1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = trainingPlan1(l1.next, l2)
    return l1
  } else {
    l2.next = trainingPlan1(l1, l2.next)
    return l2
  }
}