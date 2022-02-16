/**
 * Definition for singly-linked list.
 * 单向链表
 * function ListNode(val, next) {
 *    this.val = (val === undefined ? 0 : val)
 *    this.next = (next === undefined ? null : next)
 * }
 */
/** 删除排序链表中的重复元素
 * 给定一个已排序的链表的头 head，删除所有重复的元素，使每个元素只出现一次。返回已排序的链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) {
    return head
  }
  let headItem = head
  while (headItem.next !== null) {
    if (headItem.val === headItem.next.val) {
      headItem.next = headItem.next.next
    } else {
      headItem = headItem.next
    }
  }
  return head
}



console.log(deleteDuplicates([1, 1, 2, 3, 3]))