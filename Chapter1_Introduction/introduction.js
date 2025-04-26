"use strict";
let Rnumber = 42;
//Rnumber = "100"; // Error: Type 'string' is not assignable to type 'number'
let Rstring = "Hello, TypeScript!";
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("TypeScript")); // Output: Hello, TypeScript!
//greet2(); //Cannot find name 'greet2'
let a = 10; // number
