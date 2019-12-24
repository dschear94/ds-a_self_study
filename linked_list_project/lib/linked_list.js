// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);

        
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        this.length++;

        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }

        return current;

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newHead = new Node(val);

        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while (current) {
            if (current.value === target) return true;
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let tracker = 0;
        let current = this.head;
        while (tracker < index) {
            tracker++;
            current = current.next;
        }
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {

        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        // if (index >= this.length) return false;
        // let tracker = 0;
        // let prev = this.head;
        // let current = this.head.next;
        // let newNode = new Node(val);
        // while (tracker < index) {
        //     tracker++;
        //     prev = current;
        //     current = current.next;
        // }
        // prev.next = newNode;
        // newNode.next = current;
        // this.length++;
        // return true;

        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.addToHead(val);
        if (index === this.length) return !!this.addToTail(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const next = prev.next;
        prev.next = newNode;
        newNode.next = next;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.removeTail();
        if (index === 0) return this.removeHead();

        const prev = this.get(index - 1);
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
