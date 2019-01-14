// consists of nodes where each node has a value and pointer/link to the next node
// head node is the first node and tail node is the last node (pointer of tail points to null)
// common operations are add, delete, search,
// Big(o) - O(n) linear
// Common uses - lists where order is important

function LinkedList() {
	let length = 0;
	let head = null;

	// create nodes
	const Node = function(value) {
		this.value = value; // value
		this.next = null; // pointer to next value
	};

	// returns size
	this.size = function() {
		return length;
	};

	// returns head
	this.head = function() {
		return head;
	};
	// to add and delete items, keep track of previous node and nect node
	// add an item
	this.add = function(value) {
		const node = new Node(value); // create node

		if (head === null) {
			// empty, set node as the head (need to start from here)
			head = node;
		} else {
			let currentNode = head; // has nodes already

			while (currentNode.next) {
				// there's another node (i.e. not null)
				currentNode = currentNode.next; // go to the next node
			}

			currentNode.next = node; // when there aren't any next nodes (reach end), add the node to the end
		}

		length++; // increment size
	};

	// remove an item
	this.remove = function(value) {
		const currentNode = head;
		let previousNode; // need to know the previous node in order to remove

		// case where the head node is the one to be remove
		if (currentNode.value === value) {
			head = currentNode.next; // make the node after the head the new head
		} else {
			while (currentNode.value !== value) {
				// traverse looking for item to be removed
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			previousNode.next = currentNode.next;
		}

		length--;
	};

	// determine if a linked list is empty
	this.isEmpty = function() {
		return length === 0;
	};

	// get the index of a value
	this.indexOf = function(value) {
		let currentNode = head;
		let index = -1;

		while (currentNode) {
			index++;
			if (currentNode.value === value) {
				return index;
			}
			currentNode = currentNode.next;
		}

		return -1;
	};

	// find the value at an index
	this.valueAt = function(index) {
		let currentNode = head;
		let count = 0;
		while (count < index) {
			count++;
			currentNode = currentNode.next;
		}
		return currentNode.value;
	};

	// add a value to the middle of the list
	this.addAt = function(index, value) {
		const node = new Node(value);

		let currentNode = head;
		let previousNode;
		let currentIndex = 0;

		if (index > length) {
			return false;
		}

		if (index === 0) {
			node.next = currentNode;
			head = node;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			node.next = currentNode;
			previousNode.next = node;
		}
		length++;
	};

	// remove a value in middle of list
	this.removeAt = function(index) {
		let currentNode = head;
		let previousNode;
		let currentIndex = 0;
		if (index < 0 || index >= length) {
			return null;
		}
		if (index === 0) {
			head = currentNode.next;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.value;
	};
}

const conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.valueAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());
