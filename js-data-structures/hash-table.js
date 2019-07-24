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
	const bucket = total % this.numBuckets; // gets value between 0 and number of buckets
	return bucket; //
};

const hashTable = new HashTable(20); // hash table with 20 buckets
console.log(hashTable.hash('apples'));
