/**
 * OPERATORS
 * 
 * 0. An operator can manipulate a value or operand, and are used for perorminging logical and mathematical compulations on operands. There are multiple types of operators:
 * Assignment operators
 * Arithmetic operators
 * Comparison operators
 * Logical operators
 * Unary operators
 * Ternary operator
 */
 
 
 // 1. assignment operators //
 // Assignment operators are used for assigning values to operands
  
 // = (assignment operator)
 
 var a = 10;     // assigns a to a value of 10.
 console.log(a); // prints 10
 
 // += & -= (add and assignment operator & subtract and assignment operator)
 
 var num1 = 5;      
 num1 += 5;         // updates the value of num1 to 10 by adding 5
 console.log(num1); // prints => 10 
 
 var num2 = 10;
 num2 -= 5;         // updates the value of num2 to 5 by subtracting 5
 console.log(num2); // print 5
 
 // *= & /= (multiply and assignment operator & divide and assignment operator)
 
 var number1 = 5;      
 number1 *= 2;         // updates the value of number1 to 10 by multiplying it by 2
 console.log(number1); // prints => 10
 
 var number2 = 10;     
 number2 /= 2;         // updates the value of 10 to 5 by dividing it by 2
 console.log(number2); // prints => 5
 
 // %= (modulus and assignment)
 
 var numb1 = 7;         
 numb1 %= 5;         // updates the value of num1 to 2 by dividing it by 5 and taking the remainder.       
 console.log(numb1); // prints => 2
 
 //2. Arithmetic operators //
 // arithmetic operators operate on numerical values and return a numerical value
 
 // + (addition)

var b = 5 + 5;  // creates variable b whose value is the sum of 5 + 5.
console.log(b); // prints => 10.

// - (subtraction)

var c = 10 - 5; // creates variable c whose value is the difference of 10 - 5.
console.log(c); // prints => 5.

// * (multiplication)

var d = 5 * 10; // creates variable d whose value is 5 multiplied by 10.
console.log(d); // prints => 50.

// / (division)

var e = 10 / 2; // creates variable e whose value is 10 divided by 2.
console.log(e); // prints 5.

// % (modulus)

var f = 7 % 5;  // creates variable f whose value is the remainder of 7 divided by 5.
console.log(f); // prints 2.

// ++ (increment)

var g = 9;      // creates variable g with a value of 9
var h = g++;    // creates a value h with a value of g++, which translates to g + 1.
console.log(h); // prints => 10.

// -- (decrement)

var i = 11;     // creates variable i with a value of 11.
var j = i--;    // creates variable j with a value of 11--, which translates to i - 1.
console.log(j); // prints => 10.

//3. comparison operators //
// comparison operators compare one value to another.

// == //
//compares the equality of two operands

var k = 10;
var l = 10;
if (k == l){         // checks if variable k is equal to l
 console.log(true);  // will print => true
} else {
 console.log(false); // doesn't reach this line
}

// === //
// strictly compares the equality of two operands (checks for type)

var m = 10;          
var n = "10";
if (m === n){        // m === n is false because it is checking for data type and n is a string
 console.log(true);  // skips
} else {
 console.log(false); // prints => false
}

// != (not equal) //

var o = 10;
if (o != 11){           // if o isnt equal to 11
 console.log("Not 11"); // prints => "Not 11"
}

// > & < (greater than and less than) //

var p = 10;
var q = 15;
if (p < q){                // if p is less than q
 console.log("less than"); // prints => "less than" since we know p is 10 and q is 15
}

// >= & <= (greater than or equal to & less than or greater to)

var r = 10;
var s = 10;
if (r <= s){                           // if r is less than or equal to s
 console.log("less than or equal to"); // prints => "less than or equal to" since we know r is equal to s
}

//4. Logical Operators //
// logical operators are used to find the logic between variables in JS.

// && (logical AND) //

var aa = 10;
if (aa < 100 && aa > 1){ // if aa is less than 100 and greater than 1
 console.log(true);      // prints => true since aa is both less than 100 and greater than 1
}

// || (logical OR) //

var bb = 5;
if (bb > 10 || bb === 5){ // if bb is greater than 10 or strictly equal to 5
 console.log(true);       // prints ==> true because while it bb isn't greater than 10, it is strictly equal to 5
}

// ! (logical NOT) //
// essentially reveres booleans, gives true for false values, and false for true values

var cc = 10; 
var dd = 15;
!(cc < dd); // returns false since the boolean is reversed, essentially asking if cc is NOT less than dd

//5. Unary Operators //
// a unary operator is an operation with only one operand

// typeof //
// returns a string that says the type of the operand

console.log(typeof "cat"); // prints => string
console.log(typeof false); // prints => boolean
console.log(typeof 12);    // prints => number

// + & - (unary plus and minus)
// unary plus converts an operand into a number & unary minus converts an operand into a number and negates the value

var aaa = 5;
aaa = +aaa;
console.log(aaa); // prints => 5

var bbb = 10;
bbb = -bbb;
console.log(bbb); // prints => -10

//6. Ternary Operator
// evaluates a condition and executes code block based on the condition

var age = 21;
var canYouDrink = 
  (age >= 21) ? "You are allowed to drink" : "You are not allowed to drink"; // if the condition is true, the first expression is executed, if false, the second expression is executed
  console.log(canYouDrink); 