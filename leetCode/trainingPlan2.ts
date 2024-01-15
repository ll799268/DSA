
import ListNode from './ListNode'

/**
 * 训练计划II
 */

// 计数
function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  let leg: number = 0
  let node: ListNode | null = head
  while (node) {
    node = node.next
    leg++
  }

  node = head
  for (let i = 0; i < leg - cnt; i++) {
    node = node!.next
  }

  return node
};

// 双指针
function trainingPlan1(head: ListNode | null, cnt: number): ListNode | null {
  let left: ListNode | null = head,
    right: ListNode | null = head

  while (cnt--) right = right!.next

  while (right) {
    left = left!.next
    right = right.next
  }

  return left
}