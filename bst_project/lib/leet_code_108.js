// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    let BST = new BST();

    for (let i = nums.length - 1; i >= 0; i--) {
        let nodeVal = nums[i];
        BST.insert(nodeVal);
    }


}