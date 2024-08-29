# Data types in Typescript
TypeScript is a statically typed superset of JavaScript, which means it adds type annotations and type-checking to JavaScript.

## 1. Built in data types

### primitive types
    - String
    - Boolean
    - Number
    - Big Int
    - Symbol
    - null & undefined
### object type


## 2. User Defined data types

- Array
- Tuple
- class 
- Interface
- any
- Type alias
- Enums
- Union types
- Generics types

## Special types

- never 
- unknown

# Detailed notes
## 1. Built-in Data Types

These are the types provided by TypeScript out of the box. They include:

### Primitive Types: Represent basic data values.

#### number: Numeric values, including integers and floating-point numbers.
```
let age: number = 25;
let temperature: number = 98.6;
```
#### string: Textual data.
```
let name: string = "Alice";
let greeting: string = `Hello, ${name}!`;
```

#### boolean: True or false values.
```
let isActive: boolean = true;
let isCompleted: boolean = false;
```

#### void: Represents the absence of any value, typically used as a return type for functions that do not return a value.
```
function logMessage(message: string): void {
    console.log(message);
}
```

#### null & undefined
null: Represents intentional absence of any object value. 
undefined: Represents a variable that has not been assigned a value.
```
let emptyValue: null = null;

let notDefined: undefined = undefined;
```

#### symbol: Represents a unique identifier.

```
let uniqueSymbol: symbol = Symbol('unique');
```
#### bigint: Represents large integers that are not possible with the number type.

```
let bigIntValue: bigint = 1234567890123456789012345678901234567890n;
```

### Object Types: Represent more complex data structures.

object: A non-primitive type representing any value that is not a primitive.
typescript
Copy code
let person: object = { name: "John", age: 30 };

## 2. User-Defined Data Types
These types are created by the user and include:

### Type Aliases: Define a new name for a type.

```
type Point = { x: number; y: number; };
let point: Point = { x: 10, y: 20 };
```
### Interfaces: Describe the shape of an object. They can be extended and merged.
```
interface Person {
    name: string;
    age: number;
}
let alice: Person = { name: "Alice", age: 30 };
```

### Classes: Define a blueprint for creating objects with specific properties and methods.

```
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

let dog = new Animal("Dog");
dog.speak();
```
### Tuples: Represent arrays with a fixed number of elements where each element can have a different type.

```
let personTuple: [string, number] = ["Alice", 30];
```

### Enums: Define a set of named constants.
```
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
```
### Union Types: Allow a value to be one of several types.

```
let value: number | string;
value = 42;       // valid
value = "Hello";  // valid
```

### Intersection Types: Combine multiple types into one. A value must satisfy all types in the intersection.

```
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee;

let john: EmployeePerson = { name: "John", employeeId: 123 };
```
### Generic Types: Provide a way to create components that work with any type. They are used to define functions, classes, and interfaces that can operate on different types.

```
function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>("Hello");
```

## 3. Specialized Types
### never: Represents values that never occur. Used for functions that throw errors or have infinite loops.

```
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}
```
### unknown: Represents a value that could be of any type but requires type checking before performing operations.

```
let unknownValue: unknown = 42;

if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
```
