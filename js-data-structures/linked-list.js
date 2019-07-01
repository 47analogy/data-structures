function LinkedList() {
	this.head = null; // initial properties not pointing to anything so
	this.tail = null; // parameters in constructor function set to null
}

function Node(value, next, previous) {
	this.value = value;
	this.next = next;
	this.previous = previous;
}

const linkList1 = new LinkedList();
//console.log(linkList1);

const node1 = new Node(7, 'node2', null); // head node
//console.log(node1);

LinkedList.prototype.addToHead = function (value) {
	const newNode = new Node(value, this.head, null); // this.head = null if list is empty

	if (this.head) {
		// list already has a head
		this.head.previous = newNode; // point current head to newNode
	} else {
		// list is empty
		this.tail = newNode; // newNode is also the tail
	}
	this.head = newNode; // newNode is now the head
};

LinkedList.prototype.addToTail = function (value) {
	const newNode = new Node(value, null, this.tail);

	// if the list is not empty
	if (this.tail) {
		this.tail.next = newNode;
	} else {
		// otherwise make it both head and tail
		this.head = newNode;
	}
	this.tail = newNode; // newNode is the tail
};

LinkedList.prototype.removeHead = function () {
	// if list is empty
	if (!this.head) {
		return null;
	}
	let val = this.head.value;
	this.head = this.head.next;
	// if list is not empty
	if (this.head) {
		this.head.previous = null;
	} else {
		this.tail = null; // case where there is only 1 node
	}
	return val;
};

LinkedList.prototype.removeTail = function () {
	// list is empty
	if (!this.tail) {
		return null
	}
	let val = this.tail.value;
	this.tail = this.tail.previous // set the new tail
	if (this.tail) {
		this.tail.next = null // more than 1 node, so set the next to null
	} else {
		this.head = null // node is both head and tail
	}
	return val
}

const linkedlist2 = new LinkedList();

linkedlist2.addToHead(1000);
linkedlist2.addToHead(2000);
linkedlist2.addToTail(3000);

console.log(linkedlist2);
console.log(linkedlist2.removeTail());