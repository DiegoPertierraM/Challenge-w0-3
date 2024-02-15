import { strictEquals } from './module.js';

console.log('Testing 1 v. 1: expected true', strictEquals(1, 1));
console.log(
  'Testing NaN v. NaN: expected false',
  'Rule',
  strictEquals(NaN, NaN)
);
console.log('Testing 0 v. -0: expected true', 'Rule', strictEquals(0, -0));
console.log('Testing -0 v. 0: expected true', 'Rule', strictEquals(-0, 0));
console.log('Testing 1 v. "1": expected false', strictEquals(1, '1'));
console.log('Testing true v. false: expected false', strictEquals(true, false));
console.log(
  'Testing false v. false: expected true',
  strictEquals(false, false)
);
console.log(
  'Testing "water" v. "oil": expected false',
  strictEquals('water', 'oil')
);

// CORRECIONES
// --------------------------------------------------------------------------------
// Añadir en el testing lo que debe dar en vez de comentarlo
