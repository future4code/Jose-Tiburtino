const operation = process.argv[2];
const firstValue = Number(process.argv[3]);
const secondValue = Number(process.argv[4]);

switch (operation) {
  case "add":
    console.log(
      "\x1b[42m",
      `${firstValue} + ${secondValue} = ${firstValue + secondValue}`
    );
    break;
  case "subtract":
    console.log(
      "\x1b[42m",
      `${firstValue} - ${secondValue} = ${firstValue - secondValue}`
    );
    break;
  case "mult":
    console.log(
      "\x1b[42m",
      `${firstValue} * ${secondValue} = ${firstValue * secondValue}`
    );
    break;
  case "div":
    console.log(
      "\x1b[42m",
      `${firstValue} / ${secondValue} = ${firstValue / secondValue}`
    );
    break;
  default:
    console.log("Coloque valores válidos");
    break;
}
