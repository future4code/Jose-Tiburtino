// A: A entrada está sendo um array, e a saída está sendo um objecto com propriedades que são "maior, menos e media".

type stats = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numbers: number[]): stats {
  const numerosOrdenados: number[] = numbers.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numbers) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numbers.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numbers.length,
  };

  return estatisticas;
}

// C:

type dataSamples = {
  numbers: number[];
  obterEstatisticas: (numbers: number[]) => stats;
};
