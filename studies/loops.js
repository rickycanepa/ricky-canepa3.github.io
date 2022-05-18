/**
 * LOOPS
 * 
 * 0. Loops run a code block repeatedly until a condition is met. There are 3 common types of loops: while, for, and for-in loops.
 */
 
 // 1. for loops //
 // a for loop runs a block of code repeatedly until a certain condition is met.
 
 for (let i = 0; i < 10; i++){   // we declare a variable i, and say while i is less than 10, add 1 to the value of i
    console.log("hello");  // prints => "hello" 10 times since that's how many times the code block will run before the condition is met
}

for (let i = 10; i > 0; i--){ // set another condition, but this time subtracting
    console.log("hello");     // prints => "hello" 10 times
}

// 2. looping over an array //

var array = ["one", "two", "three", "four"]; // created an array

for(var i = 0; i < array.length; i++){       // made a loop that will will run as long as i is less than the length of the array
console.log(array[i]);                   // prints => "one" "two" "three", "four"
}

var arr = ["one", "two", "three", "four"];     // made another array
                                           
for(i = arr.length - 1; i >= 0; i--){  // set new condition
console.log(arr[i]);               // prints "four", "three", "two", "one", looping through the array in reverse
}

// 3. for-in loops
// for in loops are often used to loop over an object

var object = {red: "1", blue: "2", green: "3"}; // created an object
var text = "";                                  // created an empty string

for(let x in object){                           // for - in loop
console.log(text += object[x] + " ");         // prints => "1, 1 2, 1 2 3"
}

// 4. while loops
// while loops will loop through a code block as long as a specified condition is true

var g = 0;          // set var g to a value of 0
while(g < 10) {     // while g is less than, the code block will be looped
console.log(g); // prints => 1, 2, 3, 4, 5, 6, 7, 8, 9, 9.  
g++;            // adds 1 to g each iteration
}