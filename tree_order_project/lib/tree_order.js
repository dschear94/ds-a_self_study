function inOrderArray(root) {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val];

    return inOrderArray(root.left).concat([root.val]).concat(inOrderArray(root.right));
}

function postOrderArray(root) {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val];

    return postOrderArray(root.left).concat(postOrderArray(root.right)).concat([root.val]);
}


module.exports = {
    inOrderArray,
    postOrderArray
};