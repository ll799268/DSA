/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 环形链表
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head, fast = head; // 乌龟和兔子同时从起点出发
  while (fast && fast.next) {
    slow = slow.next // 乌龟走一步
    fast = fast.next.next // 兔子走两步
    if (fast === slow) return true // 兔子追上乌龟（套圈），说明有环
  }
  return false // 访问到了链表末尾，无环
};

var hasCycle = function (head) {
  while (head) {
    if (head.tag) {
      return true
    }

    head.tag = true
    head = head.next
  }

  return false
};

var hasCycle = function (head) {
  try {
    JSON.stringify(head)
  } catch {
    return true
  }
  return false
};