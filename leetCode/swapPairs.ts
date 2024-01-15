import ListNode from './ListNode'

/**
 * 两两交换链表中的节点
 */
function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode | null = new ListNode(0, head)
  let node: ListNode | null = dummyNode

  while (node && node.next && node.next.next) {
    let temp1: ListNode | null = node.next
    let secNode: ListNode | null = node.next.next
    let temp2: ListNode | null = node.next.next.next

    node.next = secNode
    secNode.next = temp1
    temp1.next = temp2
    node = temp1
  }

  return dummyNode.next
};