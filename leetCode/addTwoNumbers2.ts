import ListNode from './ListNode'

/**
 * 两数相加II
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const stack1: number[] = []
  const stack2: number[] = []


  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let cur: ListNode | null = null
  let count: number = 0

  while (count || stack1.length || stack2.length) {
    let v1: number = stack1.length ? stack1.pop() : 0
    let v2: number = stack2.length ? stack2.pop() : 0

    let sum: number = count + v1 + v2
    count = sum >= 10 ? 1 : 0

    const head: ListNode = new ListNode(sum % 10, cur)
    cur = head

  }

  return cur
};