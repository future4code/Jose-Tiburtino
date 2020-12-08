// INTERPRETAÇÃO

// EXERCÍCIO 1
// Na linha 3 foi se adicionando o valor de 5, assim somando com a linha 2 e apresentando o valor de 10.
// O resultado impresso no console é 10.

// EXERCÍCIO 2
// Vai ser impresso no console todos os números que forem maiores que 18, ou seja, [19, 21, 23, 25, 27, 30].
// Sim.

// EXERCÍCIO 3
//    A. 
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numeros of array) {
//     console.log (numeros)
// }

// B.

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let divArray = []

// for (let i = 0; i < array.length; i++){
    
//     divArray.push (array[i]/10)
//     console.log (divArray[i])
// }

// C.

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let parArray = []

// for (let i = 0; i < array.length; i++){
  
//     if (array[i] % 2 === 0){    
//     parArray.push (array[i])
//     }
// }
// console.log (parArray)

// D.

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let indexArray = []

// for (let i = 0; i < array.length; i++){
//   indexArray.push(`O elemento do índex ${i} é: ${array[i]}`)
// }
//   console.log (indexArray)

// E.

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = 0
// let menor = array[0]

// for (let i=0; i < array.length; i++){
//   if (array[i]>maior){
//     maior=array[i]
//   }
//   if (array[i]<menor) {
//     menor=array[i]
//   }
// }
// console.log(`O maior número é ${maior} e o menor número é ${menor}`)

// DESAFIO 1.

// 0
// 00
// 000
// 0000

// DESAFIO 2

// let escolha = Number (prompt ("Escolha um número!"))
// console.log('Vamos jogar!');
// let chute = Number (prompt ("Chute um número até acertar!"))
// console.log(`O número chutado foi ${chute}`);
// let erro = 0

// while (chute !== escolha) {

//     erro+=1

//     if (chute < escolha) {
//         console.log(`Errou, o número escolhido é menor.O número chutado foi ${chute}`);
//     }
//     else if (chute > escolha) {
//         console.log(`Errou, o número escolhido é menor.O número chutado foi ${chute}`);
//     }

//     chute = Number (prompt ("Chute um número até acertar!"))

// }

// console.log(`O número de tentativas foi: ${erro}`);
// console.log("Parabéns você acertou!");

// DESAFIO 3

// const robot = Math.floor(Math.random() * 100) + 1;  
// console.log('Vamos jogar!');
// let chute = Number (prompt ("Chute um número até acertar!"))
// console.log(`O número chutado foi ${chute}`);
// let erro = 0

// while (chute !== robot) {

//     erro+=1

//     if (chute < robot) {
//         console.log(`Errou, o número escolhido é menor.O número chutado foi ${chute}`);
//     }
//     else if (chute > robot) {
//         console.log(`Errou, o número escolhido é maior.O número chutado foi ${chute}`);
//     }

//     chute = Number (prompt ("Chute um número até acertar!"))

// }

// console.log(`O número de tentativas foi: ${erro}`);
// console.log("Parabéns você acertou!");

// Sim, foi fácil fazer a alteração pois só mudei a 1ª linha de código e algumas váriaveis para que se comportassem de modo diferente.
// Não sei o que poderia ser feito para ser mais fácil, xD.