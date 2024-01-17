import TreeNode from './TreeNode'

/** 
 * 二叉树的后序遍历
 * 左 -> 右 -> 根
 */
var postorderTraversal = function (root) {
  let stack: TreeNode[] = [],
    res: number[] = []
  while (root || stack.length) {
    while (root) {
      res.unshift(root.val)
      stack.push(root)
      root = root.right
    }
    let node = stack.pop()
    root = node.left
  }
  return res
}

// 递归
function postorderTraversal1(root: TreeNode | null): number[] {
  const traverse = (node: TreeNode | null, res: number[]): void => {
    if (!node) return
    traverse(node.left, res)
    traverse(node.right, res)
    result.push(node.val)
  }

  const result: number[] = []
  traverse(root, result)

  return result
}
