/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
console.log(myVariable); // prints => someString

// 4. var //
// var is either globally scoped or function/locally scoped

var test = "hello";
console.log (test); // prints => hello

// 5. hoisting var //

console.log(hoist);
var hoist = "hello";

/* var variables are hoisted to the top of their scope and initialized with a value of undefined.
* it will be interpreted like this:
*/

var hoist;
console.log(hoist); // hoist is undefined
hoist = "hello";

// 6. let //
// let is block scoped

let declare = "money";
declare = "cash";      // let can be updated, but it cannot be redeclared
console.log(declare);  // prints => cash

// 7. hoisting let
// if you try to use a let variable before a declaration you get a reference error

// 8. const
// variables declared with const maintain constant values, and they are block scoped

const constant = "string";
console.log(constant); // prints => string

// NOTE: You cannot redeclare a const variable

// 9. hoisting const
// just like let, if you try to use a const variable before it has been declared, you will get a reference error.