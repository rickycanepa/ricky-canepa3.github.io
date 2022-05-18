/**
 * FUNCTIONS
 * 
 * 0. a function must take an input and return an output, it is a set of statements the performs a task.
 */
 
 // 1. First we must create a function. //
 
 function printString(string) {  // a string is the parameter of the function
    console.log(string);        // function will print whatever is passed into the parameter
}

// 2. We can now call the function by passing a string into the parameter of the function

printString("hello"); // using a function call, we passed the string "hello" into the function. The function will print => "hello".

// 3. Named function expression syntax //

const namedExpression = function(string){  // assigning function to variable
    console.log(string);
};

namedExpression("hi there"); // prints => "hi there"
 
// 4. Inputs and outputs //
// the inputs of a function are the parameters, and it will output based on what is passed into the parameters.

function printNumber(number){ // number will be our input
    console.log(number);
}

printNumber(5); // running this function will print => 5 as its output

// 5. Scope of variables
// Functions can see global scopes, and scopes within the function itself. It cannot see with blocks of code (or sub blocks) or within a module.

// 6. Arrow functions //
// arrow functions are a compact alternative to traditional function expressions

var arrow = (movie) => {return ("My favorite movie is " + movie);} // will concat whatever argument is passed into movie with "My favorite movie is"

// 7. Closure //
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state

function makeGreeting() {
    var name = 'Ricky';
    function firstName() {  // the inner function is an example of closure because it is accessing name from the parent function
      console.log(name);
    }
    return firstName;
  }
  