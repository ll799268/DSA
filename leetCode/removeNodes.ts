import ListNode from './ListNode'

/**
 * 从链表中移除节点
 */

function removeNodes(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }

  head.next = removeNodes(head.next)
  if (head.next && head.val < head.next.val) {
    return head.next
  }

  return head
};