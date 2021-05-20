// A:
const ascendingOrder = (n: number) => {
  if (n >= 0) {
    ascendingOrder(n - 1);
    console.log(n);
  }
};

console.log(ascendingOrder(5));

// B:

const descendingOrder = (n: number) => {
  if (n >= 0) {
    console.log(n);
    descendingOrder(n - 1);
  }
};

console.log(descendingOrder(5));
