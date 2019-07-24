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

const hashTable = new HashTable(20); // hash table with 20 buckets
console.log(hashTable);
