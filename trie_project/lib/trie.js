class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) {
        let letter = word[0];

        
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }
        
        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root = root.children[letter])
        }
    }

    insertIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            if (!(letter in root.children)) {
                root.children[letter] = new Node();
            }
            root = root.children[letter];
            if (i === word.length - 1) {
                root.isTerminal = true;
            }
        }
    }

    searchRecur(word, root = this.root) {
        let letter = word[0];

        if (word.length === 0) {
            if (root.isTerminal) {
                return true;
            } else {
                return false;
            }
        }

        if (!(letter in root.children)) {
            return false;
        } else {
            return this.searchRecur(word.slice(1), root = root.children[letter])
        }

    }

    searchIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];

            if (!(letter in root.children)) {
                return false;
            }

            root = root.children[letter];
        }

        return root.isTerminal;
    }

    wordsWithPrefix(prefix, root = this.root) {

        if (prefix.length === 0) {
            let words = [];
    
            if (root.isTerminal) words.push("");
    
            for (let letter in root.children) {
                let child = root.children[letter];
                let suffixes = this.wordsWithPrefix(prefix, child);
                let wordBuilds = suffixes.map(suffix => letter + suffix);
                words.push(...wordBuilds)
            }
    
        
            return words;
        } else {
            let firstLetter = prefix[0];
            let child = root.children[firstLetter];
            if (child === undefined) {
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
                let wordBuilds = suffixes.map(suffix => firstLetter + suffix);
                return wordBuilds;
            };
        }
    }
}

module.exports = {
    Node,
    Trie
};