/* INTERPRETAÇÃO

Exercício 1.
a. false
b. false
c. true
e. booleans

Exercício 2.
a. undefined
b. null
c. 11
d. 3
e. [3,19,5,6,7,8,9,10,11,12,13]
f. 9

*/

// ESCRITA

/* Exercício 1:

let idade = Number (prompt('Qual sua idade?'))
let idadeAmigo = Number (prompt ('Qual a idade do seu melhor amigo ou amiga?'))

const resultado1 = Number (id   ade) > (idadeAmigo)
console.log('Sua idade é maior do que a do seu melhor amigo?', resultado1);

const resultado = idade - idadeAmigo
console.log(resultado);
*/

/* Exercício 2:

const par = Number (prompt('Insira um número par'))
let resultado = par%2
console.log(resultado);

O padrão de números pares sempre vai resultar em 0 e os números impares vão resultar em 1.
*/

/* Exercício 3:

let listaDeTarefas = []
let tarefas1 = prompt ('Primeira tarefa do dia')
let tarefas2 = prompt ('Segunda tarefa do dia')
let tarefas3 = prompt ('Terceira tarefa do dia')
listaDeTarefas.push (tarefas1 , tarefas2, tarefas3)
console.log('Tarefas' ,listaDeTarefas);    

let indice = prompt ('Digite a tarefa que já realizou entre 0,1 e 2')
let indiceNumero = Number (indice) 
listaDeTarefas.splice (indiceNumero, 1)
console.log('Realizou',listaDeTarefas)
*/

// Exercício 4:

// let programa = prompt ('Qual seu nome de usuário?')
// let programa1 = prompt ('Qual seu email?')
// console.log(`O e-mail ${programa1}  foi cadastrado com sucesso. Seja bem-vindo(o),${programa}`);


// Desafios:

/* Exercício 1:

let fahrenheit = (77 - 32) * 5/9 + 273.15
console.log('77ºF em Kº',fahrenheit);  
let celsius = (80) * 9/5 + 32
console.log('80ºC em Fº' , celsius);
let f1 = (30) * 9/5 + 32
let k1 = 30 + 273.15
console.log('Valor de 30ºC em Fº e Kº:', f1 ,k1);

let inserir = Number (prompt ('Insira o valor de Celsius que deseja converter'))
let valorF = (inserir) * 9/5 + 32
let valorK = inserir + 273.15
console.log(`O valor ${inserir}Cº convertido para Fº é ${valorF}º e para Kº é ${valorK}º`);

*/

// Exercício 2:

// let custo = 0.05
// let gasto = 280
// let total = gasto * custo
// console.log('Valor a ser pago por hora:', total);
// let desconto = total * 0.15
// let totalConta = total - desconto
// console.log('Valor a ser pago com desconto de 15%: ',totalConta);

// Exercício 3:

// let lbPeso = 20 / 2.205
// console.log(`20lb equivale a ${lbPeso} KG`);

// let ozPeso = 10.5 / 35.274
// console.log(`10.5 oz equivalem a ${ozPeso} KG`);

// let milhaD = 100 * 1609.34
// console.log(`100mi equivalem a ${milhaD} M`);

// let pesM = 50 / 3.281
// console.log(`50ft equivalem a ${pesM} M`);

// let galaoL = 103.56 * 3.785
// console.log(`103.56gal equivalem a ${galaoL} L`);

// let xicaraL = 450 / 3.785
// console.log(`450xic equivalema a ${xicaraL} L`);

// let convercao = Number (prompt ('Insira um valor de LB para ser convertido em KG'))
// let valorLb = convercao / 2.205
// console.log(`O valor convertido de Lb para KG fica: ${valorLb}`);