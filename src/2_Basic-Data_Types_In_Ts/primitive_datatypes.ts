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
let maxNumber =Number.MAX_SAFE_INTEGER //9007199254740991 2^53-1


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
let s1:symbol = Symbol('Key')
let s2:symbol = Symbol("value")

//7. Big int datatype
let number2:number = 90071992547409956 //Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
let bigIntValue: bigint = 1234567890123456789012345678901234567890n;


//Implicit & Explicit type assignment

let n:number =10  //Explicit type assignment
let age3 =20;    //Implicit type assignment

