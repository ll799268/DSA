import ListNode from './ListNode'

/**
 * 删除链表的节点
 */
function deleteNode(head: ListNode | null, val: number): ListNode | null {
  let pre: ListNode = new ListNode()
  pre.next = head
  let p: ListNode = pre
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return pre.next
};