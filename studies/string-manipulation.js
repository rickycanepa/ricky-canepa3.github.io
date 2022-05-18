/**
 * STRING MANIPULATION
 * 
 * 0. Strings in JS can nbe manipulated because JS treats primitive values as objects when executing methods and properties.
 */
 
 // 1. the slice() method //
 // slice extracts a part of a string and returns the extracted part in a new string. It takes two parameters, the start position and the end position.
 
 var string = "elephant";
 var newString = string.slice(5, 8); // 5 is our start position, 8 is our end position

 console.log(newString);             // prints => ant
 
 // NOTE: there is a substring() method that works the same but cannot accept negative indexes.
 
 // 2. the replace() method //
 // replaces a specific value with another value in a string
 
 var text = "I am very sad";
 var replaceText = text.replace("sad", "happy"); // replaces "sad" with => "happy"

 console.log(replaceText); // prints => "I am very happy"
 
 // 3. toUpperCase() & toLowerCase //
 // A converts a string to upper case/ lower case
 
 var regular = "hello";
 var upperRegular = regular.toUpperCase(); // will take "hello" string and capitalize it

 console.log(upperRegular);                // prints => "HELLO"
 
 var regular2 = "HELLO";
 var lowerRegular = regular2.toLowerCase(); // will take "HELLO" string and lower case it

 console.log(lowerRegular);                 // prints => "hello"
 
 // 4. concat() method //
 // joins two or more strings, can be used instead of the plus operator
 
var word1 = "hi";
var word2 = "there";
var phrase = word1.concat(" ", word2); // will join word1 and word2 seperated by a space

console.log(phrase); // prints => "hi there"

// 5. trim() method //
// gets rid of the white space between both sides of a string

var space = "   Hello   ";
var trimSpace = space.trim(); // will trim the empty spaces from string

console.log(trimSpace); // prints => "Hello"

// 6. charAt() method //
// returns the character at a specific index

var ex = "tiger";
console.log(ex.charAt(0)); // prints => "t"
 
// 7. concatenation operator //
// the + operator is known as the concatenation operator

var ex1 = "Hello";
var ex2 = "World";
var concatOp = ex1 + " " + ex2; // new variable that is a concatenation of the ex1 & ex2 seperated by a space

console.log(concatOp);  // prints => "Hello World"