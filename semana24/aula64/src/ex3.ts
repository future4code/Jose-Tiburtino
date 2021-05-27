//  A: Podemos representar uma matriz em typescript da seguinte maneira:
// matrix = [[1,2,3], [4,5,6], [7,8,9]]

// B:

const replaceValue = (
  matrix: number[][],
  row: number,
  column: number,
  valueToReplace: number
): void => {
  if (!matrix[row] || !matrix[row][column]) {
    throw new Error("Fora do intervalo da matriz");
  }
  matrix[row][column] = valueToReplace;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
replaceValue(matrix, 1, 1, 1);
console.log(matrix);
