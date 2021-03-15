// Exercício A: Podemos acessar  os parametros passados na linha de comando pelo process.argv que percore um array.

const name = process.argv[2];
const age = Number(process.argv[3]);
const ageSevenYearsLater = age + 7;

if (name && age) {
  console.log(
    "\x1b[45m",
    `Olá, ${name}!, Você tem ${age} anos. Em sete anos você tem terá ${ageSevenYearsLater}`
  );
} else {
  console.log("\x1b[45m", "Esperava 2 parâmetros só recebi um.");
}
