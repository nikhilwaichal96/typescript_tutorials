- TypeScript is a strongly typed, object-oriented programming language that builds on JavaScript
- Typescript is superset of javascript
- Everything which we can do in JS can be achieved in Typescript
- Typescript provide OOps functionality, Strict type checking, Security
- TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.



# TypeScript Overview

## What is TypeScript?
TypeScript is a strongly typed, object-oriented programming language that builds on JavaScript. It was developed and maintained by Microsoft.

## Key Differences from JavaScript
1. **Static Typing**
   - TypeScript adds optional static typing
   - JavaScript is dynamically typed

2. **Object-Oriented Features**
   - TypeScript supports interfaces, classes, inheritance, modules
   - JavaScript has more limited OOP support

3. **Compilation**
   - TypeScript code must be compiled to JavaScript
   - JavaScript runs directly in browsers

4. **Lack of Syntax checking**
    JS doesnt check code and provide errors it provides error at runtime

5. **In JS errors are caught at runtime**

## Why Use TypeScript?

### 1. Better Development Experience
- Early error detection
- Better IDE support with IntelliSense
- Code refactoring capabilities

### 2. Enhanced Maintainability
- Clear interfaces and type definitions
- Easier to maintain large codebases
- Better documentation through type annotations
- Readable and maintainable code for large applications

### 3. Safety Features
- Catch errors at compile time
- Type checking prevents runtime errors
- Improved code quality

Here's a simple comparison:

````typescript
// JavaScript
function add(x, y) {
    return x + y;
}

// TypeScript
function add(x: number, y: number): number {
    return x + y;
}
````

TypeScript code ultimately compiles to JavaScript, making it compatible with all JavaScript environments while providing additional development benefits.

## Installing & Running typescript file

### Installation
npm install typescript --save-dev

### checking version of typescript
tsc --version   //Version 5.8.3


### Compiling TS file
tsc ./Chapter1_Introduction/introduction.ts  //it compiles and generate introduction.js file

tsc index.ts --watch //When we run this in terminal we don't need to compile the changes again and again

### Initializing typescript project
tsc --init
https://aka.ms/tsconfig options need to be used in tsconfig.json