/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 训练计划III
 * @param {ListNode} head
 * @return {ListNode}
 */
var trainningPlan = function (head) {
  let pre = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
};