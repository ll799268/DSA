/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const compareNode = (left, right) => {
    if (left === null && right === null) return true
    if (left === null && right !== null || (left !== null && right === null)) return false
    if (left.val !== right.val) return false
    return compareNode(left.left, right.right) && compareNode(left.right, right.left)
  }

  return compareNode(root.left, root.right)
};