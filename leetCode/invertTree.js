

/***
 * 反转二叉树
 * @param {treeNode} node
 * {value: '1', left: {...}, right: {...}
 */

var invertTree = function(node) {
  const left = node.left;
  node.left = node.right;
  node.right = left;
  invertTree(node.left);
  invertTree(node.right);
}