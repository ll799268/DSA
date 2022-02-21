/** 二叉树前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/** 根 -> 左 -> 右 
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let stack = [],
    res = []
  if (root) stack.push(root)
  while (stack.length) {
    const curNode = stack.pop()
    res.push(curNode.val)
    if (curNode.right) stack.push(curNode.right)
    if (curNode.left) stack.push(curNode.left)
  }
  return res
}