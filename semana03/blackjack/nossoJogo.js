/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//  console.log("Bem vindo ao jogo de BlackJack");

//  if(confirm("Quer iniciar uma nova rodada?")) {

//    let cartaHuman = [comprarCarta(), comprarCarta()]
//    let cartaPc = [comprarCarta(), comprarCarta()]

//    let somaHuman = cartaHuman[0].valor + cartaHuman[1].valor 
//    let somaPc = cartaPc[0].valor + cartaPc[1].valor

//    console.log(`Usuário - cartas: ${cartaHuman[0].texto} ${cartaHuman[1].texto} - Pontuanção: ${somaHuman}`)
//    console.log(`Computador - cartas: ${cartaPc [0].texto} ${cartaPc [1].texto} - Pontuação: ${somaPc}`);

//    if (somaHuman > somaPc){
//    console.log("O usuário ganhou.");
//    }
//    else if (somaPc > somaHuman) {
//    console.log("O computador ganhou.");   
//    }
//    else {
//     console.log("Empate!");
//    }
// }
// else {
//    console.log("O jogo acabou.");
//  }