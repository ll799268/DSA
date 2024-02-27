import ListNode from './ListNode'

/**
 * 回文链表
 */
function isPalindrome(head: ListNode | null): boolean {
  const arr: number[] = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  for (let i = 0, j = arr.length - 1; i < arr.length, j > 0; i++, j--) {
    if (arr[i] !== arr[j]) return false
  }

  return true
};
function isPalindrome1(head: ListNode | null): boolean {
  let frontPointer: ListNode | null | any = null
  const recursivelyCheck = (currentNode: ListNode | null) => {
    if (currentNode !== null) {
      if (!recursivelyCheck(currentNode.next)) return false
      if (currentNode.val !== frontPointer.val) return false
      frontPointer = frontPointer.next
    }
    return true
  }

  frontPointer = head
  return recursivelyCheck(head)
};