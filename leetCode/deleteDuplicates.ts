import ListNode from './ListNode'

/**
 * 删除排序链表中的重复元素
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head

  let node: ListNode = head
  while (node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head
};

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let slow: ListNode | null = head
  let fast: ListNode | null = head.next
  while (fast) {
    if (fast.val === slow!.val) {
      slow!.next = fast.next
    } else {
      slow = slow!.next
    }
    fast = fast.next
  }

  return head
}