const digitsQuantity = (n: number, d: number = 1): number => {
  if (n < 10) {
    return d;
  }
  return digitsQuantity(n / 10, d + 1);
};

console.log(digitsQuantity(2));
console.log(digitsQuantity(50));

