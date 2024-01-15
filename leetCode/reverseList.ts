import ListNode from './ListNode'

/**
 * 翻转链表
 */
function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null
  let cur: ListNode | null = head

  while (cur) {
    const next: ListNode | null = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre

};

/**
 * 递归(前 => 后)
 */
type Recur = (preNode: ListNode | null, curNode: ListNode | null) => ListNode | null

function reverseList1(head: ListNode | null): ListNode | null {
  const recur: Recur = (preNode, curNode) => {
    if (curNode === null) return preNode

    const tempNode: ListNode | null = curNode.next
    curNode.next = preNode
    preNode = curNode
    curNode = tempNode

    return recur(preNode, curNode)
  }

  return recur(null, head)
}