/*
The JavaScript splice() method changes the elements of the array by 
replacing or removing the elements, in place.

The splice() method is used either adds/removes items to/from an array,
and then returns the removed item. The first argument specifies the
array position for insertion or deletion whereas the optional second
argument indicates the number of elements to be deleted. Each additional
argument is added to the array.

Syntax
The syntax is as follows:

removed = array.splice(startingIndex, countItems, newItem1, ...., newItemN)

Removed: The array which stores all the removed elements that the splice() method returns
Array: The array on which splice() method is being applied
Splice: Function call to the method
startingIndex: Starting index for the splice() method
countItems: Specifies the number of items in the array to replace/remove from the starting index
newItem1...n: Items that replace the array elements from the starting index

Optional Arguments: Count and items arguments are optional in the function call.
*/

// Some of the examples of this method are,

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

console.log("original arrays => ", arrayIntegersOriginal1);
let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2);
// returns [1, 2]; original array: [3, 4, 5]
console.log("original arrays => ", arrayIntegersOriginal1);
console.log("new arrays => ", arrayIntegers1);

console.log("original arrays => ", arrayIntegersOriginal2);
let arrayIntegers2 = arrayIntegersOriginal2.splice(3);
// returns [4, 5]; original array: [1, 2, 3]
console.log("original arrays => ", arrayIntegersOriginal2);
console.log("new arrays => ", arrayIntegers2);

console.log("original arrays => ", arrayIntegersOriginal3);
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c");
// returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
console.log("original arrays => ", arrayIntegersOriginal3);
console.log("new arrays => ", arrayIntegers3);

// Note: Splice method modifies the original array and returns the deleted array.

// Examples
// Given below are some examples that show multiple ways to use the splice() method.

// 1. Remove all elements following the first element

var arr = ["A", "B", "C", "D"];
var removed = arr.splice(1, arr.length - 1);
console.log("Original Array: ", arr);
console.log("Removed Elements: ", removed);

// arr is ['A']
// removed is ['B', 'C', 'D']

// 2. Replace all elements following the first element

var arr = ["A", "B", "C", "D"];
var removed = arr.splice(1, arr.length - 1, "X", "Y", "Z");
console.log("Original Array: ", arr);
console.log("Removed Elements: ", removed);

// arr is ['A', 'X', 'Y', 'Z']
// removed is ['B', 'C', 'D']

// 3. Remove 0 (zero) elements and insert 2 elements at index 2

var arr = ["A", "B", "C", "D"];
var removed = arr.splice(2, 0, "X", "Y");
console.log("Original Array: ", arr);
console.log("Removed Elements: ", removed);

// arr is ['A', 'B', 'X', 'Y', 'C', 'D']
// removed is []

// 4. Remove all elements following a specified index

var arr = ["A", "B", "C", "D", "E", "F"];
index = 3;
var removed = arr.splice(index);
console.log("Original Array: ", arr);
console.log("Removed Elements: ", removed);

// arr is ['A', 'B', 'C']
// removed is ['D', 'E', 'F']
