import ListNode from './ListNode'

/**
 * 翻转链表
 */
function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null
  let cur: ListNode | null = head

  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre

};