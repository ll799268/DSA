import ListNode from './ListNode'

/**
 * 删除排序链表中的重复元素II
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy: ListNode | null = new ListNode(0, head)
  let pre: ListNode | null = dummy
  let cur: ListNode | null = head
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next
    }
    if (pre.next === cur) {
      pre = cur
    } else {
      pre.next = cur.next
    }
    cur = cur.next
  }
  return dummy.next
};
