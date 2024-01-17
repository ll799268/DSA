import TreeNode from './TreeNode'

/** 
 * 二叉树的前序遍历
 * 根 -> 左 -> 右 
 */
function preorderTraversal(root: TreeNode | null): number[] {
  let stack: TreeNode[] = [],
    res: number[] = []
  if (root) stack.push(root)
  while (stack.length) {
    const curNode = stack.pop()
    res.push(curNode.val)
    if (curNode.right) stack.push(curNode.right)
    if (curNode.left) stack.push(curNode.left)
  }
  return res
}

// 递归
function preorderTraversal1(root: TreeNode | null): number[] {
  const traverse = (node: TreeNode | null, res: number[]): void => {
    if (!node) return
    result.push(node.val)
    traverse(node.left, res)
    traverse(node.right, res)
  }

  const result: number[] = []
  traverse(root, result)

  return result
}
