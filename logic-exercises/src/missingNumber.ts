export const missingNumber = (arr: number[], n: number = arr.length) => {
  let total = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  return total;
};
