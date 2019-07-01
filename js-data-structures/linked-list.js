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