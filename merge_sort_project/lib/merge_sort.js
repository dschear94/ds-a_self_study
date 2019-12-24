function merge(array1, array2) {

    let merged = [];
    
    while (array1.length || array2.length) {
        let el1 = array1.length ? array1[0] : Infinity;
        let el2 = array2.length ? array2[0] : Infinity;

        let next;
        if (el1 < el2) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }

        merged.push(next);
    }

    return merged;
}

function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);

}

module.exports = {
    merge,
    mergeSort
};