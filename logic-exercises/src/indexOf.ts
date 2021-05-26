export const indexOf = (source: string, query: string) => {
  for (let i = 0; i < source.length; i++) {
    if (source[i] === query) {
      return i;
    }
  }
  return -1;
};
