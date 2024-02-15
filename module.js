// CORRECIONES
// --------------------------------------------------------------------------------
// export { strictEquals }; --> Se haría al final el export
// --> Exporta algo que todavía no existe, funciona por el hoisting de JS
// --> Además, es más habitual exportar una a una las funciones
// --> También se puede exportar por defecto: export default { strictEquals }

export const strictEquals = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  if (
    (Object.is(a, -0) && Object.is(0, b)) ||
    (Object.is(a, 0) && Object.is(-0, b))
  ) {
    return true;
  }

  return Object.is(a, b);

  // CORRECIONES
  // --------------------------------------------------------------------------------
  // if (Object.is(a, b)) {
  //   return true;
  // }
  // return false;

  // --> Object.is(a,b) devuelve un boolean, por lo que se puede devolver directamente
  // --> No tiene sentido hacer un condicional, sobra
};
