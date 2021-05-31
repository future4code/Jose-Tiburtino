export const lonelyNumber = (array: number[]) => {
  let result = array.reduce((a, b) => a ^ b, 0);
  return result;
};
