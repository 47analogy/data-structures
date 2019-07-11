function Stack() {
	this.collection = [];
	this.print = function() {
		console.log(collection);
	};

	Stack.prototype.push = function(val) {
		this.collection.push(val);
	};

	Stack.prototype.pop = function() {
		const item = this.collection.pop();
		return item; // return the item
	};

	Stack.prototype.peek = function() {
		let item = this.collection[this.collection.length - 1]; // first item on stack
		return item;
	};

	Stack.prototype.isEmpty = function() {
		if (this.collection.length > 0) {
			return false;
		} else {
			return true; // empty
		}
	};

	Stack.prototype.clear = function() {
		// let index = this.collection.length - 1;

		// while (index >= 0) {
		// 	this.collection.pop();
		// }
		// return this.collection;
		return (this.collection.length = 0);
	};
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.peek());
stack.clear();
console.log(stack.isEmpty());
console.log(stack);
