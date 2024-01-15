import ListNode from './ListNode'

/**
 * 删除链表的倒数第N个节点
 */

// 快慢指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let virHead: ListNode | null = new ListNode(0, head)
  let slow: ListNode | null = virHead
  let fast: ListNode | null = virHead

  while (n--) {
    fast = fast.next!
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next!
  }

  slow.next = slow.next!.next
  return virHead.next
};

// 计数节点总数法
function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  let node: ListNode | null = head
  let size: number = 0

  while (node) {
    size++
    node = node.next
  }

  if (size === n) {
    head = head!.next
  } else {
    node = head
    for (let i = 0; i < size - n - 1; i++) {
      node = node!.next
    }
    node!.next = node!.next!.next
  }

  return head
}