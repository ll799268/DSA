import TreeNode from './TreeNode'

/** 
 * 二叉树的中序遍历
 * 左 -> 根 -> 右
 */
function inorderTraversal(root: TreeNode | null): number[] {
  let stack: TreeNode[] = [],
    res: number[] = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}

// 递归
function inorderTraversal1(root: TreeNode | null): number[] {
  const traverse = (node: TreeNode | null, res: number[]): void => {
    if (!node) return
    traverse(node.left, res)
    result.push(node.val)
    traverse(node.right, res)
  }

  const result: number[] = []
  traverse(root, result)

  return result
}