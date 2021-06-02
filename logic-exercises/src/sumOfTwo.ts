// Escreva uma função que recebe um array de números `nums` e um `target` e retorna os **indíces** dos dois elementos que somam o valor do **target**.

// Você pode assumir que qualquer input possível sempre terá **exatamente** 1 solução, e você não pode usar o mesmo elemento duas vezes.

interface hashTable {
  [index: number]: number;
}

export const sumOfTwo = (arr: number[], target: number) => {
  let hash: hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let next = target - current;
    const indexNext = hash[next];
    if (indexNext !== undefined) return [indexNext, i];
    hash[current] = i;
  }
};
