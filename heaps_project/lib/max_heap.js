class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;

        let val = this.array[idx];
        let parentIdx = this.getParent(idx);
        let parentVal = this.array[parentIdx];

        if (val > parentVal) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.siftUp(parentIdx);
        }

    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        if (this.array.length - 1 === idx) return;

        let val = this.array[idx];
        let leftChildIdx = this.getLeftChild(idx);
        let rightChildIdx = this.getRightChild(idx);
        let leftChildVal = this.array[leftChildIdx];
        let rightChildVal = this.array[rightChildIdx];

        if (leftChildVal === undefined) {
            leftChildVal = -Infinity;
        }
        if (rightChildVal === undefined) {
            rightChildVal = -Infinity;
        }

        let greaterChild;

        if (leftChildVal > rightChildVal) {
            greaterChild = leftChildIdx;
        } else {
            greaterChild = rightChildIdx;
        }

        if (val < this.array[greaterChild]) {
            [ this.array[idx], this.array[greaterChild] ] = [ this.array[greaterChild], this.array[idx] ];
            this.siftDown(greaterChild);
        }
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();

        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};