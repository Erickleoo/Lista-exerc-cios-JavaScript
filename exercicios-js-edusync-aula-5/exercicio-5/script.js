
/* 5 - Escreva um algoritmo em JavaScript para ler um vetor A de 10 números. Após, o
algoritmo deverá ler mais um número e guardar em uma variável X. Armazenar em um vetor
M o resultado de cada elemento de A multiplicado pelo valor X. Imprima, no console
utilizando Interpolação, o vetor M. Utilize const e/ou let nas declarações de variáveis.*/

let vetorA = [];
let vetorM = [];
let j = 0


for(i = 1; i <= 10; i++) {
  vetorA[i] = Number(prompt(`Digite o ${i}º valor:`));
  console.log(`${i}º valor é ${vetorA[i]}`)
}
const x =  Number(prompt('Digite o valor de X'))
console.log(`O valor de x = ${x}`)

for(i = 1; i <= 10; i++){
  vetorM[i] = vetorA[i] * x;
  console.log(`Os valores da multiplicão entre ${vetorA[i]} * ${x} = ${vetorM[i]}`)
}