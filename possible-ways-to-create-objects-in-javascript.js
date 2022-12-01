// There are many ways to create objects in javascript as below

// 1. Object constructor:
// The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

var object_01 = new Object();

// 2. Object's create method:
// The create method of Object creates a new object by passing the prototype object as a parameter

var object_02 = Object.create(null);

// 3. Object literal syntax:
// The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

var object_03 = {
     name: "Sudheer",
     age: 34
};

// Object literal property values can be of any data type, including array, function, and nested object.
// Note: This is an easiest way to create an object

// 4. Function constructor:
// Create any function and apply the new operator to create object instances,

function Person(name: string) {
  this.name = name;
  this.age = 21;
}
var object_04 = new Person("Sudheer");

// 5. Function constructor with prototype:
// This is similar to function constructor but it uses prototype for their properties and methods,

function PersonPrototype() {}
PersonPrototype.prototype.name = "Sudheer";
var object_05 = new PersonPrototype();

// This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

function func() {};

new func(x, y, z);

// (OR)

// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, x, y, z),

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === 'object' ? result : newInstance);

// 6. ES6 Class syntax:
// ES6 introduces class feature to create the objects

class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");

// 7. Singleton pattern:
// A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

var object_07 = new (function () {
  this.name = "Sudheer";
})();