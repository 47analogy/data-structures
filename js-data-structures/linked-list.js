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
console.log(linkList1);

const node1 = new Node(7, 'node2', null); // head node
console.log(node1);
