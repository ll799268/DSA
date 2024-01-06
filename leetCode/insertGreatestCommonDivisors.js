/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 在链表中插入最大公约数
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let node = head

  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

  while (node.next) {
    node.next = new ListNode(gcd(node.val, node.next.val), node.next)
    node.next = node.next.next
  }

  return head
};