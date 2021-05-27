interface InputString {
  [index: string]: string;
}

const compressString = (input: string): string => {
  const substrings: string[] = [];
  let lastChar = input[0];
  let charCount = 0;

  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    charCount++;
  }
  substrings.push(lastChar + charCount);
  let result = "";
  for (const key of substrings) {
    result += key;
  }
  return result.length > input.length ? input : result;
};

console.log(compressString("aabbb"));
console.log(compressString("aabcccccaaa"));
console.log(compressString("accurate"));
console.log(compressString("escola"));
console.log(compressString("accuraaaaaaaaaate"));
