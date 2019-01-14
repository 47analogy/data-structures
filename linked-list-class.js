// create nodes
class Node {
	constructor(value) {
		this.value = value; // value
		this.next = null; // pointer to next node
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// add a value
	add(value) {
		// create new node
		let node = new Node(value);

		// list is empty
		if (!this.head && !this.tail) {
			// set node as head and tail
			this.head = node;
			this.tail = node;

			// already a head node
		} else {
			// add node to the end
			this.tail.next = node;

			// set the new node as the tail
			this.tail = this.tail.next;
		}

		// increase the size
		this.length++;
	}
	// remove a value
	remove(value) {
		let current = this.head;
		let previous = this.head;
		// case where the head node is the one to be remove
		if (current.value === value) {
			this.head = current.next; // make the node after the head the new head
		} else {
			while (current.value !== value) {
				// traverse looking for item to be removed
				previous = current;
				current = current.next;
			}
			// case where the tail node is the one to remove
			if (this.tail === current) {
				this.tail = previous; // reset tail node to the previous
			}
			previous.next = current.next; // remove reference to 'deleted' value
		}

		this.length--; // decrease the size
	}

	// search for a value
	search(value) {
		// start at the beginning
		let node = this.head;

		// loop through the linked list
		while (node) {
			if (node.value === value) {
				return true; // found it!
			}

			node = node.next; // search the next node
		}
		return false; // not found
	}

	// size method
	size() {
		return this.length;
	}
}
