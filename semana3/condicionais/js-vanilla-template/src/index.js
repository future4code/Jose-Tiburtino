// INTERPRETAÇÃO

// EXERCÍCIO 1
    // Pede pro usuário inserir um número e confere os números.
    // Ele imprime no console "Passou no teste" para os números pares.
    // Ele imprime no console "Não passou no teste" para os números ímpares.

// EXERCÍCIO 2
    // Pede para o usuário inserir uma fruta e verificar o preço da fruta escolhida.
    // Será impresso no console "O preço da fruta, maça, é, R$, 2.25"  
    // O preço da fruta, é, R$5.
    
// EXERCÍCIO 3

// a. Está pedindo para um usuário digitar um número.
// b. Se o usuário digitar o número 10, a mensagem no terminal será "Esse número passou no teste"
//    Se o usuário digitar -10, não irá aparecer nada ,pois não foi declarado nada.
// c. Sim, havéra um erro no console pois o último console.log está fora do IF, daria certo se a varíavel fosse declarado fora ou o console.log estivesse dentro do bloco.

// ESCRITA

// EXERCÍCIO 4

// let idade = Number (prompt ('Qual sua idade?'))
// let idadePermitido = 18

// if (idade > idadePermitido) {
//     console.log("Você pode dirigir");
// }
// else {
//     console.log('Você não pode dirigir');
// }

// EXERCÍCIO 5

// Feito com Else e If

// const turno = prompt ('Qual turno do dia você estuda? Coloque M para Matutino, V para Vespertino e N para Noturno')

// if ( turno === "M" ) {
//     console.log("Bom dia!");
// }
// else if (turno === "V") {
//     console.log('Boa tarde!');
// }
// else if (turno === "N") {
//     console.log('Boa noite!');
// }
// else {
//     console.log('Coloque um turno válido!');
// }

// EXERCÍCIO 6:

// Feito com Switch Case

// const turno = prompt ('Qual turno do dia você estuda? Coloque M para Matutino, V para Vespertino e N para Noturno')

// switch (turno) {
//     case "M":
//         console.log("Bom dia!");
//         break
//     case "V":
//         console.log("Boa Tarde!");
//         break
//     case "N":
//         console.log("Boa Noite!");
//         break
//     default:
//         console.log("Coloque um turno válido!");
//         break            
// }

// EXERCÍCIO 7

// const filme = prompt ("Qual filme você irá assistir?")
// const ingresso = prompt ("Quanto quer pagar no ingresso?")

// if (filme === "Fantasia" && ingresso <= 15) {
//     console.log("Bom Filme!");
// }
// else {
//     console.log('Escolha outro filme :(');
// }    


// DESAFIO 1:

// const filme = prompt ("Qual filme você irá assistir?")
// const ingresso = prompt ("Quanto quer pagar no ingresso?")
// const snack = prompt ('Qual Snack deseja comprar?')

// if (filme === "Fantasia" && ingresso <= 15 && snack) {
//     console.log(`Bom Filme!`);
//     console.log(`... com ${snack}`);
// }
// else {
//     console.log('Escolha outro filme :(');
// }    


// DESAFIO 2: INCOMPLETO

// const nome = prompt ('Digite o nome completo') 
// const tipoJogo = prompt ('Digite o tipo de jogo: IN indica internacional e DO indica doméstico')
// const etapaDoJogo = prompt ('Digite a etapa do jogo: SF, DT ou FI')
// const categoria = Number (prompt ('Digite a categoria: opções 1,2,3 ou 4'))
// const quantidadeDeIngressos = Number (prompt ('Digite a quantidade de ingressos'))

// console.log('--- Dados da Compra ---');
// console.log('Nome do Cliente:', nome);

// if (tipoJogo === "DO"){
//     console.log("tipo de jogo: Nacional")
// }
// else if (tipoJogo === "IN"){
//     console.log("Tipo de Jogo: Internacional");
// }
// if (etapaDoJogo === "SF"){
//     console.log("Etapa do jogo: Semi-Final");
// }
// else if (etapaDoJogo === "DT"){
//     console.log("Etapa do Jogo: Decisão de Terceiro Lugar");
// }
// else if (etapaDoJogo === "FI"){
//     console.log("Etapa do jogo: Final");
// }

// console.log("Categoria:",categoria);
// console.log("Quantidade de Ingressos:" ,quantidadeDeIngressos);
// console.log("--- Valores ---");