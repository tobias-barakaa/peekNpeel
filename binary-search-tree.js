class Node {
    constructor(value) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if(data < node.value) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                } else if(data > node.value) {
                    if(node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
}