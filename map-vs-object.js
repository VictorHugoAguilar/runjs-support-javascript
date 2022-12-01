/*
Map is a data structure which helps in storing the data in the form of pairs. 
The pair consists of a unique key and a value mapped to the key. 
It helps prevent duplicity.

Object follows the same concept as that of map i.e. using key-value pair for 
storing data. But there are slight differences which makes map a better performer
in certain situations.

Few basic differences are as follows:

In Object, the data-type of the key-field is restricted to integer, 
strings, and symbols. Whereas in Map, the key-field can be of any 
data-type (integer, an array, even an object!)

In the Map, the original order of elements is preserved. 
This is not true in case of objects.
The Map is an instance of an object but the vice-versa is not true.
*/

var map = new Map([
  [5, 4],
  [7, 9],
]);

//output:true
console.log(map instanceof Object);

//output:false
var obj = new Object();
console.log(obj instanceof Map);

// Let’s dive deep into some more concepts which makes Object different than Map.

// 1. Declaration:

// In JavaScript, there are many ways to create an object. For example:

// 1.1 By using direct literal:

var obj = {};
var obj = { 1: "Object Name", 2: "Test" };
console.log(obj);
// object

// 1.2 Use of constructor:

var obj = new Object(); //Empty object
var obj = new Object();
console.log(obj);
// Object

// 1.3 Using object.create

function fruits() {
  this.name = "fruit 1";
  this.season = "summer";
}

function apple() {
  fruits.call(this);
}

apple.prototype = Object.create(fruits.prototype);
const app = new apple();
console.log(app.name);
console.log(app.season);
// fruit 1
// summer

// On the other hand, the Map has only one way of creation.

var map = new Map();//Empty
console.log(map);
var map = new Map([[1, "Sam"], [2, "John"]]); // 1-> Sam, 2->John
console.log(map);

// Map(0)
// Map(2)

// 2. Accessing Element:

// 2.1 Map uses its inbuilt get() method for accessing its elements.
map.get(1);

// 2.2 Object simply uses the ‘key’ name with a dot operator to access its elements.
obj.id;
obj[id];

// 3. Check if a key already exists:

// 3.1 Map uses it’s inbuilt has() function for this.

map.has(1);//returns boolean value true or false.

// 3.2 Object uses ‘===’ operator for performing the task.

var doExist = obj.1 === undefined; //returns boolean value.

// 4. Adding new Element:

// 4.1 Map uses set() method to add new element.

map.set(4, 5); //{5->4, 7->9, 4->5}

// 4.2 In object, it is done directly.

obj["Demo"]="Map vs Object"; //{1->Object Name, 2->Test, Demo->Map vs Object}

// 5. Getting the size:

// 5.1 Map automatically updates its size and get the easiest.
console.log(map.size);

// 5.2 In object, the size needs to be calculated manually with the help Object.keys().

console.log(Object.keys(obj).length);

/*
Hence we can see Map is having better performance and less to write code structure 
which gives it an edge over Object. However, there are some scenarios which requires 
object to be used. Let us see.

WHEN AND WHERE TO USE OBJECT:

Objects are a great choice for situations where we need simple structure to store 
data and the type of keys needed is either an integer, strings or symbols.
Scenarios which needs the application of separate logic to individual property 
element, the object is definitely the choice.
JSON gives direct support for object but not with map(yet).
Map is completely hash whereas Object is more than that.
Although Map tends to have more advantages over objects, at the end the day it 
depends on the kind of data being used and the operation needs to be performed.
However, of all the advantages of map over object, map cannot replace object in 
JavaScript because Object is much more than a hash table. It shouldn’t be used just 
for the purpose of hashing if there exists another choice.
*/


