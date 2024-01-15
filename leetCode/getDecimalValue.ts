import ListNode from './ListNode'

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