/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};