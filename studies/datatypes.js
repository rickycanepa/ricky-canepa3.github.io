/**
 * DATA TYPES:
 * 
 * 0. Data types are different types of data that are often stored in variables. They specify what kind of data can be stored and manipulated in the program. Primitive or simple data types include string, number, boolean, undefined, NaN, infinity/-infinity and null. Complex data types include objects, arrays, and functions.
 */ 
 
 
 // 1. primitive data types // 
 // All data types apart from objects (arrays are considered objects in Javascript) define immutable values, or values that cannot be changed. We consider these data types to be "primitive values".
  
 // 2. complex data types // 
 // Primitive/simple data types contain just one value, where as complex data types represent a collection of values.
  
 // 3. strings //
 // A string is textual content that is contained in single or double quotations.
 console.log("Hi there!"); //prints Hi there! OR
 console.log('Hi there!'); // also print Hi there! using single quotations.
 
 // 4. number //
 // The number data type is used to represent positive numbers, negative numbers, numbers using exponential notation, or decimals.
 var num1 = 10;      // this is an integer
 var num2 = 20.5;    // this is a decimal, referred to as a floating point decimal
 var num3 = 1.25e+6; // this is exponential notation, it is the same as 1250000
 console.log(num1);  // prints 10
 console.log(num2);  // prints 20.5
 console.log(num3);  // prints 1.25e+6
 
 // 5. boolean //
 // boolean data types are true or false values. Can be used to represent yes and no or as on and off switches.
 var num1a = 5;
 var num2a = 10;
 var num3a = 15;
 if (num1a > num2a){  // an if statment asking if the variable num1a is greater than num2a
  console.log(true);  // if the statement is true, it will return true. We know that num1a is less than num2a, this line of code is skipped
 } else {             // an else statement saying that if the first line's condition isn't met, run this code block
  console.log(false); // will return false.
 }
 
 if (num2a < num3a){  // as before, an if statement asking if num2a is less that num3a
  console.log(true);  // since that condition is met, it will return true
 } else {             // an else statement saying to run a code block if first condition isn't met. That code block will not run.
  console.log(false); // since the first condition is met, this line of code won't be reached.
 }
 
 // 6. undefined //
 // there is only one value the undefined data type can hold, which is actually the value undefined. when you declare a variable but do not assign a value, its value will be undefined.
 var car;
 var muscleCar = "mustang";
 console.log(car);          // this will output undefined
 console.log(muscleCar);    // this will output "mustang" since we assigned the string value "mustang" to the muscleCar variable.
 
 // 7. NaN //
 // NaN simply means a value that is not a number
 var isThisNumber = "cat";  
 var whatAboutThis = 5;
 isNaN(isThisNumber);      // isNaN is essentially asking "is this not a number?". We know that isThisNumber is assigned the string value "cat", so it will output true.
 isNaN(whatAboutThis);     // same as before, except the variable whatAboutThis is assigned 5, which is true.
 
 // 8. infinity and -infinity //
 // the value of infinity is initially Number.POSITIVE_INFINITY. Infinity is greater than any other number. The value of negative infinity is the negative value of the global object's Infinity property.
 
 if(Infinity > 10 ){ // an if statement asking if Infinity is greater than 10
  console.log(true); // we know that infinity is greater than any other number, so it will print => true.
 }
 
 if(-Infinity < 10){ // an if statement asking if -Infinity is less than 10
  console.log(true); // we know that -Infinity is the negative Infinity value, so it will print => true.
 }
 
 // NOTE: Infinity and -Infinity do not always behave the same way as they do in mathematics.
 
 // 9. null //
 // much like the undefined data type, null can also only have one value, which is null. null simply means there is no value (0 is still a value, a string that is empty is also still a value). A variable that is assigned to the null value has no value, and null can be used to empty the contents of a variable
 var noValue = null;
 console.log(noValue); //this will print => null.
 
 // 10. objects //
 // objects are a complex data type (see number 2) and are used for storing collections of data. They consist of key and value pairs, but an object can also be empty.
 var meObject = {             
     name : "Ricky",          // name is our key, and the string "Ricky" is assigned as its value. The key is not in quotes, but keep in mind JS reads keys in object as strings but you do not have to add the quotes.
     location: "New Orleans", // location is our key, the string "New Orleans" is our value.
     age: 24                  // age is our key, the number 24 is our value.
 };
 console.log(meObject);
 
 // NOTE: Remember to seperate pairs with a comma.
 
 // 11. arrays //
 // similar to an object, an array is used for storing multiple values, but in single value as opposed to key value pairs.
 
 var animalsArray = ["cat", "dog", "mouse", "horse"]; // this array contains strings of animals, seperated by commas.
 console.log(animalsArray);                           // prints => ["cat", "dog", "mouse", "horse"].
 
 // 12. functions //
 // functions are objects that can be called to execute a code block.
 
 var printThis = function(string){ // created a function, stored it in the printThis variable. It takes a string as its parameter.
  console.log(string);             // when called, this function will print whatever is passed into the string parameter.
 };                                //
 printThis("Hello There!");        // here we call the function, and pass "Hello There!" into the string parameter. Running this will print => "Hello There!"