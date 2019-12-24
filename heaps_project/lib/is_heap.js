// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let val = array[idx];
    let leftChildIdx = idx * 2;
    let rightChildIdx = idx * 2 + 1;
    let leftChildVal = array[leftChildIdx] === undefined ? -Infinity : array[leftChildIdx];
    let rightChildVal = array[rightChildIdx] === undefined ? -Infinity : array[rightChildIdx];

    return val > leftChildVal && val > rightChildVal 
        && isMaxHeap(array, leftChildIdx)
        && isMaxHeap(array, rightChildIdx);
        

}


module.exports = {
    isMaxHeap
};