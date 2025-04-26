# TypeScript Data Types - Comprehensive Guide

## Introduction
TypeScript is a statically typed superset of JavaScript that adds optional static typing. Understanding its type system is crucial for writing robust and maintainable code.

## Type Overview

### Primitive Types vs Non-Primitive Types

| Primitive Types | Non-Primitive Types |
|----------------|-------------------|
| [`number`](#number) | [`Array`](#arrays) |
| [`string`](#string) | [`Tuple`](#tuples) |
| [`boolean`](#boolean) | [`Object`](#objects) |
| [`null`](#null-and-undefined) | [`Enum`](#enums) |
| [`undefined`](#null-and-undefined) | [`Union`](#union-types) |
| [`void`](#void) | [`Intersection`](#intersection-types) |
| [`never`](#never) | [`Function`](#type-aliases) |
| [`bigint`](#bigint) | [`Interface`](#objects) |
| [`symbol`](#symbol) | [`Class`](#objects) |

> Note: Click on any type in the table to jump to its detailed description.

## 1. Primitive Types

### number
All numeric values in TypeScript are represented by the `number` type. This includes integers, floats, and special numeric values.

```typescript
let decimal: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;       // hexadecimal
let binary: number = 0b1010;    // binary
let octal: number = 0o744;      // octal
let infinity: number = Infinity;
let notANumber: number = NaN;
```

### string
Represents textual data. Can use single quotes, double quotes, or template literals.

```typescript
let firstName: string = 'John';
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`; // template literal
let multiLine: string = `
  This is a
  multi-line string
`;
```

### boolean
Represents logical values true and false.

```typescript
let isDone: boolean = false;
let isActive: boolean = true;
```

### null and undefined
These are separate types in TypeScript.

```typescript
let u: undefined = undefined;
let n: null = null;
```

### void
Used primarily as a return type for functions that don't return a value.

```typescript
function logMessage(): void {
    console.log("Hello!");
}
```

### never
Represents values that never occur. Used for functions that never return or always throw exceptions.

```typescript
function throwError(): never {
    throw new Error("This function never returns");
}
```

### bigint
Represents whole numbers larger than 2^53 - 1. Used for working with large integers.

```typescript
let bigNumber: bigint = 9007199254740991n;  // using the 'n' suffix
let anotherBigNumber: bigint = BigInt(9007199254740991);  // using BigInt function
let bigHex: bigint = 0x20000000000000n;     // bigint hexadecimal
```

### symbol
Represents unique identifiers. Symbols are immutable and unique, even if they have the same description.

```typescript
let sym1: symbol = Symbol();
let sym2: symbol = Symbol("key");  // optional string key
let sym3: symbol = Symbol("key");  // sym2 !== sym3

// Using symbols as property keys
const symKey = Symbol();
let obj = {
    [symKey]: "value"
};
```

## 2. Object Types

### Arrays
TypeScript provides two ways to define arrays:

```typescript
// Using square brackets
let numbers: number[] = [1, 2, 3, 4, 5];

// Using generic Array type
let strings: Array<string> = ["hello", "world"];

// Multi-dimensional arrays
let matrix: number[][] = [[1,2], [3,4]];
```

### Tuples
Fixed-length arrays where each element can have a different type.

```typescript
let tuple: [string, number] = ["hello", 10];
let employee: [number, string, boolean] = [1, "Steve", true];
```

### Objects
Define the shape of objects using interfaces or type aliases.

```typescript
// Using interface
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

// Using type alias
type Point = {
    x: number;
    y: number;
};

let person: Person = {
    name: "John",
    age: 30
};

let coordinates: Point = {
    x: 10,
    y: 20
};
```

### Enums
A way to define a set of named constants.

```typescript
enum Direction {
    North,
    South,
    East,
    West
}

enum StatusCodes {
    OK = 200,
    NotFound = 404,
    Error = 500
}
```

## 3. Advanced Types

### Union Types
Allow a value to be one of several types.

```typescript
let mixedType: string | number;
mixedType = "hello";  // valid
mixedType = 42;       // valid
```

### Intersection Types
Combine multiple types into one.

```typescript
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type PersonDetails = HasName & HasAge;
```

### Type Aliases
Create custom names for types.

```typescript
type UserID = string | number;
type Point = { x: number; y: number };
type Callback = (data: string) => void;
```

### Literal Types
Specific strings and numbers as types.

```typescript
type Direction = "North" | "South" | "East" | "West";
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
```

### any and unknown
- `any`: Opt-out of type checking
- `unknown`: Type-safe alternative to `any`

```typescript
let anyValue: any = 4;
anyValue = "hello";
anyValue = true;

let unknownValue: unknown = 4;
// Must perform type checking before using unknown values
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
```

## 4. Best Practices

1. **Avoid `any` Type**: Use `unknown` instead when type is truly unknown
2. **Use Interfaces for Objects**: They're more flexible and can be extended
3. **Be Explicit with Function Returns**: Always specify return types
4. **Use Union Types Instead of any**: When a value could be multiple types
5. **Utilize Type Inference**: Let TypeScript infer types when obvious

## 5. Type Assertions
Two ways to perform type assertions:

```typescript
let someValue: unknown = "hello world";
let strLength1: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length; // JSX doesn't support this syntax
```

## 6. Type Inference and the 'any' Type
TypeScript has a sophisticated type inference system that automatically detects types based on how variables are initialized or used. However, when TypeScript cannot determine the type or when no type annotation is provided in certain contexts, it may use the `any` type.

### Basic Type Inference
TypeScript can automatically detect types in many cases:

```typescript
let message = "hello";     // TypeScript infers string type
let number = 42;          // TypeScript infers number type
let isTrue = true;        // TypeScript infers boolean type
let numbers = [1, 2, 3];  // TypeScript infers number[] type
```

### When Type Inference Results in 'any'

1. **Variables without Initialization:**
```typescript
let someVariable;        // Type: any
someVariable = "hello";  // OK
someVariable = 42;       // Also OK because it's any
```

2. **Function Parameters without Type Annotations:**
```typescript
function processInput(data) {  // Parameter 'data' implicitly has 'any' type
    console.log(data);
}
```

3. **Empty Arrays:**
```typescript
let emptyArray = [];     // Type: any[]
```

### Best Practices

1. **Enable `noImplicitAny`:**
```json
{
    "compilerOptions": {
        "noImplicitAny": true
    }
}
```

2. **Always Declare Types for Function Parameters:**
```typescript
// Good Practice
function processInput(data: string) {
    console.log(data);
}

// Avoid
function processInput(data) {  // implicit any
    console.log(data);
}
```

3. **Initialize Variables with Values:**
```typescript
// Good Practice
let myString = "";          // inferred as string
let myNumber = 0;          // inferred as number

// Avoid
let myString;              // implicit any
let myNumber;              // implicit any
```



## Summary
TypeScript's type system is rich and flexible, allowing developers to write more maintainable and error-free code. Understanding these types and when to use them is crucial for effective TypeScript development.
