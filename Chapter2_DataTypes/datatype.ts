function compare1(a:number , b:number): number {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

compare1(5, 10); // Output: -1
// compare(5, "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_VALUE); 