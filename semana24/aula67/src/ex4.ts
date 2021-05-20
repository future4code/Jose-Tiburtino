const printArrayElements = (array: number[], index: number = 0) => {
  if (index < array.length) {
    console.log(array[index]);
    printArrayElements(array, index + 1);
  }
};

console.log(printArrayElements([1, 2, 3, 4]));
