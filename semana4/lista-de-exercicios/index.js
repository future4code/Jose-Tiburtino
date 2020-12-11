// Exercícios de interpretação de código:

// Interpretação 1:
// O código está pedindo para o usuário inserir o valor da cotação do Dólar atual para ser convertido em reais.
// No return ele está pegando o valor que é inserido no parâmetro da função e multiplicando pela cotação que o usuário inseriu.
// A função está pegando um valor que vem de uma varíavel na linha 7.
// O valor impresso será o valor que o usuário inseriu * 100. Ex: (5*100 = 500)

// Interpretação 2:
// A função foi criada para escolher um tipo de investimento e inserir um valor, os tipos de investimentos tem diferentes valores ao final de cada um.
// Recebe o tipo de investimento (se o investimento escolhido estiver incorreto será dado um alert), o valor inserido e será multiplicado por uma "taxa" fixa que será retornado. 
// No primeiro console.log será impresso = 150 * 1.1 = 165
// No segundo console.log não será impresso nada e dará um alert que informa o usuário que o tipo de investimento está incorreto.

// Interpretação 3:
// O código passa pelos números verificando se os mesmos são números pares ou ímpares.
// Caso o número seja par será adicionado no array1, e se o número for ímpar será adicionado ao array2.
// No primeiro console.log será impresso a quantidade de números que temos no array números que é 14.
// No segundo console.log será impresso a quantidade de números pares que temos nos array1.
// No terceiro console.log será impresso a quantidade de números ímpares que temos no array2.

// Interpretação 4:
// Está percorrendo o array e verificando se algum número do array é < que Infinity e também se algum número do array é maior que 0.
// No primeiro console.log será impresso o maior número do array.
// No segundo console.log será impresso o menor número do array.

// Exercícios de Lógica de Programação:

// Lógica 1:
// for of, for, for each.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }

//     for (numbers of array) {
//         console.log(numbers);
//     }

//     array.forEach ((elemento, index, array) => { 
//         console.log(elemento);
//     })


// Lógica 2:
// a: False.
// b: False.
// c: True.
// d: True.
// e: True.

// Lógica 3:
// O código não funciona pois não fez uma condição para verificar os números pares.

// const quantidadeDeNumerosPares = 3
// let i = 0
// while(i <= quantidadeDeNumerosPares*2-1) {
//     if ( i % 2 === 0){
//      console.log(i)
//      i+=1
//     }
//     else {
//         i+=1
//     }
// }

// Lógica 4:

// let triangulo = (a, b, c) => {
//     let resultTriangulo = ''
//     if (a === b && a === c && b === c){
//         resultTriangulo = "Equilátero"
//     }
//     else if (a === b || a === c || b === c) {
//         resultTriangulo = "Isósceles"
//     }
//     else {
//         resultTriangulo = "Escaleno"
//     }
//     return resultTriangulo
// }

// Lógica 5:

// const numero1 = 15
// const numero2 = 30

// let maior = 0
// let diferenca = numero1 - numero2

// if (numero1>numero2) {
//     maior=numero1
//     console.log(`O maior é ${maior}`);
// }
// else if (numero2>numero1) {
//     maior=numero2
//     console.log(`O maior é ${maior}`);
// }

// if (numero1 % numero2 === 0) {
//     console.log(`O ${numero1} é divísivel por ${numero2}`);
// }
// else {
//     console.log(`O ${numero1} é divísivel por ${numero2} `);
// }

// if (numero2 % numero1 === 0) {
//     console.log(`O ${numero2} é divísivel por ${numero1}`);
// }
// else {
//     console.log(`O ${numero2} é divísivel por ${numero1} `);
// }

// if (diferenca < 0) {
//     diferenca *= -1
// }

// console.log(`A diferença entre eles é ${diferenca}`);


// Exercício de Funções:

// Função 1:

// Não sei.


// Função 2:

// const alerta = () => {
//     return alert ("Hello Labenu!")
// }
// alerta ()

// Exercício de objetos:

// Objetos 1:
// Podemos utilizar os arrays/objetos para colocar e organizar melhor nossas opções como uma lista.

// Objeto 2:
// let criaRetangulo = (lado1, lado2) => {
//     let retObjeto ={
//         largura: lado1,
//         altura: lado2,
//         perímetro: 2*(lado1+lado2),
//         área: (lado1*lado2)
//     }
//     return retObjeto
// }

// console.log(criaRetangulo(40,50));

// Objetos 3:
// let filmeFav = {
//     título: "O Protetor",
//     ano: 2014,
//     diretor: "Antoine Fuqua",
//     atores: ["Denzel Washington", "Chloe Moretz", "Marton Csokas"]
// }

// console.log(`Venha assistir ao filme ${filmeFav.título}, de ${filmeFav.ano}, dirigindo por ${filmeFav.diretor} e estrelado por ${filmeFav.atores}.`);

// Objetos 4:

// let personDados = {
//     nome: "José Victor",
//     idade: 21,
//     email: "josevictortf@gmail.com",
//     endereço: "Rua Uichi Miyake, Colinas de Indaiatuba II, Indaiatuba-SP"
// }

// let anonimizarPessoa = (pessoaNome) => {
//     pessoaNome.nome = "ANÔNIMO"
//     return pessoaNome
// }

// console.log(anonimizarPessoa(personDados));


// Exercícios de funções de Array:

// Funções de array 1:

// const randomPeople = [
//     { nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// let justAdultos = (array) => {
//     const maiorIdade = array.filter((maior, index, array) => {
//         return maior.idade >= 20
//     }
//     )
//     return maiorIdade
// }
// console.log(justAdultos(randomPeople));

// let justYoung = (array) => {
//     const menorIdade = array.filter((menor, index, array) => {
//         return menor.idade <= 20
//     }
//     )
//     return menorIdade
// }
// console.log(justYoung(randomPeople));

// Funções de array 2:
// A:
// const array = [1, 2, 3, 4, 5, 6]

// const multArray = (array) => {
//     const newArray = array.map ((multi, index, array) => {
//         return multi*2
//     }
//     )
//     return newArray
// }
// console.log(multArray(array));

// B:

// const multTresArray = (array) => {
//     const newArray = array.map ((multi, index, array) => {
//         return '' + multi*3
//     }
//     )
//     return newArray
// }
// console.log(multTresArray(array));

// C:

// const parOuImpar = (array) => {
//     const parArray = array.map ((multi, index, array) => {
//         if (multi % 2 === 0){
//             return `${multi} é par` 
//         }
//         else {
//             return `${multi} é impar`
//         }
//     }
//     )
//     return parArray
// }

// console.log(parOuImpar(array));