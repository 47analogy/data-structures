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
				this.left.insert(value); // recurse on left node and insert value
			}
		}
		// value is higher, insert right
		if (value > this.value) {
			// case: right node does not exist
			if (!this.right) {
				this.right = new BinarySearchTree(value); // make it the right node (new tree)
			} else if (this.right) {
				// case: there is already a right node
				this.right.insert(value); // recurse on right node and insert value
			}
		}
	}

	contains(value) {
		// parent or current node is the value
		if (value === this.value) {
			return true;
		}

		// value is less than current node
		if (value < this.value) {
			// case: aren't any more left child nodes
			if (!this.left) {
				return false;
			} else if (this.left) {
				// case: keep searching left of current node
				return this.left.contains(value); // call contains recursively on left node
			}
		}
		// value is higher than current node
		if (value > this.value) {
			// case: aren't any more right child nodes
			if (!this.right) {
				return false;
			} else if (this.right) {
				// case: keep searching right of current node
				return this.right.contains(value); // call contains recursively on right node
			}
		}
	}

	depthFirstSearch(iteratorFunc, order) {
		// travelling based on order parameter
		// in-order: least to greatest
		// pre-order: travel down all left children branch first, then all right children branch

		if (order === 'pre-order') {
			iteratorFunc(this.value);
		}

		// travel left to bottom
		if (this.left) {
			this.left.depthFirstSearch(iteratorFunc, order); // recurse down to left
		}
		// travel to parent
		if (order === 'in-order') {
			iteratorFunc(this.value); // skip parent
		}
		// travel right to bottom
		if (this.right) {
			this.right.depthFirstSearch(iteratorFunc, order); // recurse down to right
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

bst.depthFirstSearch(logTree, 'pre-order');

// iterator Function
function logTree(value) {
	console.log(value); // 50, 30, 20, 10, 45, 35, 70, 60, 59, 100. 85, 105
}
