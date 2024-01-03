/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 训练计划II
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */

// 计数
var trainingPlan = function (head, cnt) {
  let leg = 0
  let node = head
  while (node) {
    node = node.next
    leg++
  }

  node = head
  for (let i = 0; i < leg - cnt; i++) {
    node = node.next
  }

  return node
};

// 双指针
var trainingPlan = function (head, cnt) {
  let left = head,
    right = head

  while (cnt--) right = right.next

  while (right) {
    left = left.next
    right = right.next
  }

  return left
}