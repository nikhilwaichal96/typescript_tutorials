let Rnumber: number = 42;
//Rnumber = "100"; // Error: Type 'string' is not assignable to type 'number'
let Rstring: string = "Hello, TypeScript!";

function greet(name: string): string {
 let a = 10; //'a' is declared but its value is never read. 
  return `Hello, ${name+ a}!`;
}

console.log(greet("TypeScript")); // Output: Hello, TypeScript!
//greet2(); //Cannot find name 'greet2'
let a = 10; // number