function compare(n1:number, n2:number) {
  if (n1 > n2) {
    console.log("n1 is bigger");
  } else {
    console.log("n2 is bigger than n1");
  }
}
compare(1,2)
//compare(2,"3") /**Argument of type 'string' is not assignable to parameter of type 'number'. */

//1. Number Datatype
let age: number = 25;
let temperature: number = 98.6;

//2. Boolean Datatype
let isActive: boolean = true;
let isCompleted: boolean = false;

//3. String Datatype
let fname: string = "Alice";
let greeting: string = `Hello, ${fname}!`;



//4. Void Datatype
function logMessage(message: string): void {
    console.log(message);
}

//5. Null & undefined datatype
let notDefined: undefined = undefined;
let emptyValue: null = null;

//6. Symbol datatype
let uniqueSymbol: symbol = Symbol('unique');

//7. Big int datatype
let bigIntValue: bigint = 1234567890123456789012345678901234567890n;
