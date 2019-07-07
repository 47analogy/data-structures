class BinarySearchTree {
    constructor(value, left, right) {
        this.value = value; // create BST with a value and empty children
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // value is lower, insert left
        if (value <= this.value) {
            // case: left node does not exist
            if (!this.left) {
                this.left = new BinarySearchTree(value); // make it the left node (new tree)
            } else if (this.left) {
                // case: there is already a left node
                this.left = this.insert(value); // recurse and insert value
            }
        }
        // value is higher, insert right
        if (value > this.value) {
            // case: right node does not exist
            if (!this.right) {
                this.right = new BinarySearchTree(value); // make it the right node (new tree)
            } else if (this.right) {
                // case: there is already a right node
                this.right = this.insert(value); // recurse and insert value
            }
        }
    }

}

const bst = new BinarySearchTree(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.left.right); // 45
console.log(bst.left.right.left); // 35
console.log(bst.right.right.left); // 85