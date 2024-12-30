function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // Type error expected
console.log(result); // This line will not execute due to error