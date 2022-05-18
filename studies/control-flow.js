
/*
* CONTROL FLOW:
*
* 0. Control flow determines in which order a computer will execute statements.
*/

// 1. If statement //
// and if statement says that to execute a code block only if a condition is met.

if (0 < 100){
    console.log("true"); // this will print => true
}

// 2. Else-if statement //
// an else if statement can run a code block if a certain condition is met, and if it isnt met, will check if it meets another condition.

if (0 > 100){
    console.log("greater than");
}
else if (0 < 100){
    console.log("less than");  // this will print => less than
}

// 3. Else statement
// else statements run if the if statement is false, no condition is set for the else statment unlike the else if statment

if (0 > 100){
    console.log("The Falcons will win")
}
else {
    console.log("The Saints will win") // this will print => The Saints will win
}

// 4. Switch statement
// a switch statement evaluates an expression, matching the expressions value to a case clause, and executes statements associated with that case.

let money = "$100";

switch(money) {
    case "$20":
        console.log("I have $20");
        break;
    case "$30":
        console.log("I have $30");
        break;
    case "$100":
        console.log("I have $100"); // this will print => I have $100
        break;
}