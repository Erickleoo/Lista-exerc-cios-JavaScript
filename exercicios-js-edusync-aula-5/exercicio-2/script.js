/* 2 - Escreva um algoritmo em JavaScript para ler 2 valores e se o segundo valor informado
for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o
valor zero e imprimir, utilizando Interpolação, o resultado da divisão do primeiro valor lido
pelo segundo valor lido. (utilizar a estrutura Do while). Utilize const e/ou let nas declarações
de variáveis */

function gerarValores() {
let valorA = parseInt(prompt('Digite o primeiro valor:'));
console.log(valorA)
let valorB;

do { 
  valorB = parseInt(prompt('Digite o valor novamente:'))
} while (valorB == 0);
console.log(valorB)
 
const resultado = valorA / valorB

console.log(`O resultado da divisão de ${valorA} / ${valorB} é = ${resultado}`)

}

console.log(gerarValores());
