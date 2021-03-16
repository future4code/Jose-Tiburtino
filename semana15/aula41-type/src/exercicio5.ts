const math = (number1: number, number2: number): void => {
  console.log(
    `${number1} + ${number2} = ${
      number1 + number2
    } \n ${number1} - ${number2} = ${number1 - number2} \n
        ${number1} * ${number2} = ${number1 * number2} \n
        ${number1 > number2 ? number1 : number2}
    `
  );
};
math(10, 20);
