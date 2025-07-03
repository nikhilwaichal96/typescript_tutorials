# Modules in TypeScript

## What are Modules?

Modules in TypeScript are a way to organize and encapsulate code. They allow you to split your codebase into separate files, making it easier to manage, maintain, and reuse code. Each module can export variables, functions, classes, or interfaces, which can then be imported and used in other modules.

## Benefits of Using Modules

1. **Encapsulation**: Keeps related code together and hides implementation details.
2. **Reusability**: Allows you to reuse code across different parts of your application.
3. **Maintainability**: Makes it easier to manage large codebases by breaking them into smaller, manageable pieces.
4. **Namespace Management**: Helps avoid naming conflicts by encapsulating code within a module.

## Example of a Module

```typescript
// mathUtils.ts
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}
```

```typescript
// main.ts
import { add, subtract } from './mathUtils';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

In this example, `mathUtils.ts` exports two functions, `add` and `subtract`. The `main.ts` file imports and uses these functions.

## Types of Modules

- **ES6 Modules**: Use the `import` and `export` syntax. Commonly used in modern JavaScript and TypeScript projects.
Example:
```typescript  
export function multiply(x: number, y: number): number {
    return x * y;
}
```

```typescript// main.ts
import { multiply } from './mathUtils'; 
console.log(multiply(5, 3)); // Output: 15
```
- **CommonJS Modules**: Use `require()` for importing and `module.exports` for exporting. Common in Nodejs environments.
Example:
```typescript
// mathUtils.js
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
module.exports = { add, subtract };
```             

```typescript
// Importing specific exports
import { add } from './mathUtils';

// Importing everything as an object
import * as MathUtils from './mathUtils';
console.log(MathUtils.add(5, 3)); // Output: 8
```


## Importign and exporting types
```typescript
// types.ts
export type Product = {
    id: number;
    name: string;
    price: number;
};

// main.ts
import { Product } from './types';

const product: Product = {
    id: 1,
    name: 'Laptop',
    price: 999.99
};

```

## Type aliases and Interfaces
Type aliases and interfaces can also be exported and imported in modules.
```typescript
// types.ts
export type User = {    
    id: number;
    username: string;
};
```

```typescript
// main.ts
import { User as UserType } from './types'; //using alias for User type

const user: UserType = {
    id: 1,
    username: 'john_doe'
};

```     

- Modules in TypeScript provide a powerful way to organize and manage code.
- They enhance code maintainability, reusability, and encapsulation.
- Understanding modules is essential for building scalable TypeScript applications.

## Summary

- TypeScript modules help organize code, promote reusability, and improve maintainability.
- Use modules to split your codebase into logical, manageable pieces.
- Choose the appropriate module system (ES6, CommonJS, AMD) based on your project requirements.
