/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 训练计划IV
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var trainningPlan = function (l1, l2) {
  let cur = new ListNode()
  let head = cur

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

var trainningPlan = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = trainningPlan(l1.next, l2)
    return l1
  } else {
    l2.next = trainningPlan(l1, l2.next)
    return l2
  }
}