import ListNode from './ListNode'

type fn = (a: number, b: number) => number

/**
 * 在链表中插入最大公约数
 */
function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  const gcd: fn = (a, b) => b === 0 ? a : gcd(b, a % b)

  let node: ListNode | null = head
  while (node!.next) {
    let curNode: ListNode | null = new ListNode(gcd(node!.val, node!.next.val), node!.next)
    node!.next = curNode
    node = curNode.next
  }

  return head
};