import { strictEquals } from './module.js';

console.log(strictEquals(1, 1)); // true
console.log(strictEquals(NaN, NaN)); // false --> Rule
console.log(strictEquals(0, -0)); // true --> Rule
console.log(strictEquals(-0, 0)); // true --> Rule
console.log(strictEquals(1, '1')); // false
console.log(strictEquals(true, false)); // false
console.log(strictEquals(false, false)); // true
console.log(strictEquals('water', 'oil')); // false
