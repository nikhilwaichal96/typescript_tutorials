"use strict";
function compare(n1, n2) {
    if (n1 > n2) {
        console.log("n1 is bigger");
    }
    else {
        console.log("n2 is bigger than n1");
    }
}
compare(1, 2);
//compare(2,"3") /**Argument of type 'string' is not assignable to parameter of type 'number'. */
//1. Number Datatype
let age = 25;
let temperature = 98.6;
let maxNumber = Number.MAX_SAFE_INTEGER; //9007199254740991 2^53-1
//2. Boolean Datatype
let isActive = true;
let isCompleted = false;
//3. String Datatype
let fname = "Alice";
let greeting = `Hello, ${fname}!`;
//4. Void Datatype
function logMessage(message) {
    console.log(message);
}
//5. Null & undefined datatype
let notDefined = undefined;
let emptyValue = null;
//6. Symbol datatype
let uniqueSymbol = Symbol('unique');
let s1 = Symbol('Key');
let s2 = Symbol("value");
//7. Big int datatype
let number2 = 90071992547409956; //Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
let bigIntValue = 1234567890123456789012345678901234567890n;
//Implicit & Explicit type assignment
let n = 10; //Explicit type assignment
let age3 = 20; //Implicit type assignment
