/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 二进制链表转整数
 */
function getDecimalValue(head: ListNode | null): number {
  let code: string = ''

  while (head) {
    code += head.val
    head = head.next
  }

  return parseInt(code, 2)
};