// constructor function - creates an object class (blueprint) that's used
// to create lots of objects that all have the same properties and functionality

// can also use class keyword
function User(firstName, lastName, age, gender) {
	this.firstName = firstName; // this refers to the property of parameters
	this.lastName = lastName; // when objects are created
	this.age = age;
	this.gender = gender;
}

const user1 = new User('john', 'doe', 26, 'male'); // new creates an object
const user2 = new User('mary', 'moe', 28, 'female');

// all instances have access and can use prototype
// better to add to prototype than constructor
User.prototype.emailDomain = '@gmail.com';
User.prototype.getEmailAddress = function() {
	return `${this.firstName}${this.lastName}${this.emailDomain}`;
};

console.log(user1.emailDomain);
console.log(user1.getEmailAddress());
