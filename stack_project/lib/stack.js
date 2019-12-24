// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    pop() {
        if (!this.length) return null;
        const prevTop = this.top;
        if (this.top.value === this.bottom.value) {
            this.top = null;
            this.bottom = null;
        } else {
            const temp = this.top.next;
            this.top = temp;
        }
        this.length--;
        return prevTop.value;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.size() === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            newNode.next = temp;
        }
        return ++this.length;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
