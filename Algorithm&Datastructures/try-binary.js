class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};



class BST {
    constructor (value) {
        this.root = new Node(value);
        count = 0;
    };

    insert (value) {
        let newNode = new Node(value);

        const searchTree = node => {
            if(value < node.value) {

            if(!node.left) 
                node.left = newNode;

             else {
                searchTree(node.left);
            } 
        } else if(value < node.value) {
            if(!node.right) 
                node.right = newNode;
        } else {
            searchTree(node.right);
        }





        }

        searchTree(this.root);

    };

    // minimum;
    min() {
        let currentNode = this.root;

        while(currentNode.left) {
            currentNode = currentNode.left;
        } 
        return currentNode.value;
       
    };

    max() {
        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        };
        return currentNode.value
    };

    dfsInOrder() {
        // NODE IN THE MIDDLE 
        // traverse the nodes until the end 
        // uses stack, use result to collect arrays
        let result = [];
        

        const traverse = node => {
            if(node.left) 
                traverse(node.left)

            result.push(node.value);
            if(node.right) 
                traverse(node.right);
            

        }
        traverse(this.root);
        return result;

    };

    contains(value) {
        
       currentNode = this.root;
       if(value === currentNode) {
        return true;
      
        
    }

    dfsPreOder() {
        // Node in the first place
        // uses stack
        // push to result;

        let result = [];

        traverse = node => {
            result.push(node.value);
            if(node.left)
                traverse(node.left)
            if(node.right) 
                traverse(node.right);

    
        }

        traverse(this.root);
        return result;

    };

    dfsPostOrder() {
        // Node at the end
        // traverse and use stack

        // let result push to result;

        let result = [];
        traverse = node => {
            if(node.left)
                traverse(node.left);
            if(node.right) 
                traverse(node.right);
            result.push(node.value)
        }
        traverse(this.root);
        return result;
    };

    dfsPostOrder() {
        let result = [];
        traverse = node => {
            if(node.left) 
                traverse(node.left)
            if(node.right) 
                traverse(node.right)
        }
        return result
    }


    bfs() {
        const result = [];
    
        let queue = []
    
        queue.push(this.root)
    
        while(queue.length) {
            let currentNode = queue.shift();
    
            result.push(currentNode)
    
            if(currentNode.left) {
                queue.push(currentNode.left) 
            }
    
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    
        return result;
    }



}