export { strictEquals };

const strictEquals = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }
  if (
    (Object.is(a, -0) && Object.is(0, b)) ||
    (Object.is(a, 0) && Object.is(-0, b))
  ) {
    return true;
  }
  if (Object.is(a, b)) {
    return true;
  }
  return false;
};
strictEquals();
