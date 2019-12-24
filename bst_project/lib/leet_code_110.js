// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    return Math.abs(isBalanced(root.left), isBalanced(root.right)) <= 1;
}