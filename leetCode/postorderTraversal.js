/** 二叉树的后序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/** 左 -> 右 -> 根
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let stack = [],
    res = []
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