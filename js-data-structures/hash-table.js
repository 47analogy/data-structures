// create hash table
function HashTable(size) {
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

// create hash node for data
function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null; // points to next or nothing
}

// hash function (use key to determine which bucket/index to store data)
HashTable.prototype.hash = function(key) {
	// key property from node
	let total = 0;

	for (let i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}
	const bucket = total % this.numBuckets; // gets 0 < value < number of buckets
	return bucket;
};

// inserts or updates hash node into hash table bucket
HashTable.prototype.insert = function(key, value) {
	// create index to store data
	const index = this.hash(key);

	const newNode = new HashNode(key, value);
	const currentNode = this.buckets[index];

	// if hash table is empty
	if (!this.buckets[index]) {
		this.buckets[index] = newNode;
	} else if (this.buckets[index].key === key) {
		// checks if first node is the one to be updated/overwritten
		this.buckets[index].value = value;
	} else {
		// if hash table has data already, travel to the end
		while (currentNode.next) {
			// update/overwrite data
			if (currentNode.key === key) {
				currentNode.value = value;
				return;
			}
			currentNode = currentNode.next;
		}
		// add the new hash node
		currentNode = newNode;
	}
};

const hashTable = new HashTable(10); // hash table with 20 buckets
hashTable.insert('apples', 5.99);
hashTable.insert('oranges', 2.99);
console.log(hashTable);
hashTable.insert('apples', 7.99); // update apples
console.log(hashTable);
