const sumWholeNumber = (n: number): number => {
  if (n === 0) {
    return 0;
  }
  return n + sumWholeNumber(n - 1);
};

console.log(sumWholeNumber(10));
console.log(sumWholeNumber(30));
console.log(sumWholeNumber(100));
