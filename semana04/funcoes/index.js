// INTERPRETAÇÃO

// Exercício 1:
// a. Será impresso no console, o valor de  (2*5) 10 e o valor de (10*5) 50.
// b. Não apareceria nada no console pois tiramos o console.log.

// Exercício 2:
// a. As saídas impressas no console será "Darvas" e na linha de baixo "Caio", pois está pegando os 2 primeiros do array.
// b. Seria o mesmo caso do exercício a porém será impresso "Amanda" e "Caio".

// Exercício 3:
// A função está  está puxando os números de uma array e verificando se os mesmos são pares, depois disso está multiplicando por eles mesmos e achando um novo valor que será adicionado ao array.


// ESCRITA

// Exercício 4:

// const informações = (nome, idade, cidade, estudante) => {

//     let dadosEstudante
//     if (estudante) {
//     dadosEstudante = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou estudante`
//     }
//     else {
//     dadosEstudante = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e não sou estudante`
//     }
//     return dadosEstudante

// }

// console.log(informações("José", 21, "Indaiatuba-SP", true));

// Exercício 5:

// a.:

// let somaNumeros = (num1, num2) => {
//     return num1 + num2
// }

// const resultado = somaNumeros (10, 20)
// console.log(resultado);

// b.:

// const booleanNumeros = (num1, num2) => {
//     return num1 >= num2 
// }

// const resultadoBoo = booleanNumeros (15, 13)
// console.log(resultadoBoo);

// c.:

// const mensagemString = (mensagem) => {
//     for (let i = 1; i <= 10; i++ ){
//       console.log(mensagem);
//     }
// }

// mensagemString ("Essa é a mensagem!")

// Exercício 6:
// a:
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const arrayLength = (array) => {
//     return array.length
// }
// console.log(arrayLength(array));

// // b:

// const parBoolean = (num1) => {
//     return num1 % 2 === 0
// }
// console.log(parBoolean(2));

// c:

// const parNumber = (array) => {
//     let quantidade = 0
//     for (let number of array){
//         if ( number % 2 === 0 ){
//             quantidade += 1 
//         }
//     }
//     return quantidade
// }
// console.log(`Quantidade de números pares: ${parNumber(array)}`);

// d:

// const parNumber = (array) => {
//     let quantidade = 0
//     for (let number of array){
//         if ( parBoolean(number) ){
//             quantidade += 1 
//         }
//     }
//     return quantidade
// }
// console.log(`Quantidade de números pares: ${parNumber(array)}`);

// DESAFIOS:

// EXERCÍCIO 1: 

// 1.
// const arrowRandom = (nome) => {
    // return nome
// }

// const nomeAluno = arrowRandom ("José Victor")
// console.log(nomeAluno);

// 2.

// const doisValores = (valor1 , valor2) => {
//     const soma = valor1 + valor2
//     console.log(soma);    
// }
// doisValores (25, 30)

// EXERCÍCIO 2:

// a.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// const arrayPar = (numeros) => {
//     let arrayFinal = [];

//     for (let x of numeros) {
//         if ( x % 2 === 0) {
//             arrayFinal.push(x * 2)
//         }
//     }

//     return arrayFinal;

// }

// console.log(arrayPar(numeros));

// b.:

// const maiorNum = (numeros) => {
//     let maior = 0
//     for (let i= 0; i < numeros.length; i++){
//         if (numeros[i]>maior){
//             maior = numeros [i]
//         }
//     }
//     return maior
// }

// console.log(maiorNum(numeros));

// c:

// const maiorIndice = (numeros) => {
//     let maior = 0
//     let indice = 0
//     for (let i= 0; i < numeros.length; i++){
//         if (numeros[i]>maior){
//             maior = numeros [i]
//             indice = [i]
//         }
//     }
//     return indice 
// }

// console.log(maiorIndice(numeros));

// d:

// const arrayInvert = (numeros) => {
//     return numeros.reverse() 
// }
// console.log(arrayInvert(numeros));
