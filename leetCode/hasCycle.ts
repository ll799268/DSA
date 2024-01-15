import ListNode from './ListNode'

/**
 * 环形链表
 */
function hasCycle(head: ListNode | null): boolean {
  // 乌龟和兔子同时从起点出发
  let slow: ListNode | null = head,
    fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next // 乌龟走一步
    fast = fast.next.next // 兔子走两步
    if (fast === slow) return true // 兔子追上乌龟（套圈），说明有环
  }
  return false // 访问到了链表末尾，无环
};

function hasCycle1(head: ListNode | null): boolean {
  try {
    JSON.stringify(head)
  } catch {
    return true
  }
  return false
};
