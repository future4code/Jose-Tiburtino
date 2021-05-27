const isOneEdit = (stringA: string, stringB: string): boolean => {
  if (Math.abs(stringA.length - stringB.length) > 1) return false;
  if (stringA.length > stringB.length) stringA.includes(stringB);
  if (stringB.length > stringA.length) stringB.includes(stringA);
  let diffCharacters = 0;
  for (let i = 0; i <= stringA.length; i++) {
    if (stringA[i] !== stringB[i]) diffCharacters++;
  }
  return diffCharacters === 1;
};

console.log(isOneEdit("banana", "banan"));
console.log(isOneEdit("banana", "bananak"));
console.log(isOneEdit("banana", "panana"));
console.log(isOneEdit("banana", "bananaaa"));
