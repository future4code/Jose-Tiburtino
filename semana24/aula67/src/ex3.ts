const sumWholeNumberInteractive = (n: number): number => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumWholeNumberInteractive(10));
console.log(sumWholeNumberInteractive(30));
console.log(sumWholeNumberInteractive(100));
