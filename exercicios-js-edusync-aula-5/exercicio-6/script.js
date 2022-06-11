
/* 6 - Faça um programa em JavaScript que recebe três números do usuário, e identifica o
maior através de uma função e o menor número através de outra função.Utilize const
e/ou let nas declarações de variáveis e a sintaxe Arrow function na criação das funções.
Utilize Interpolação para imprimir no console. */

let num1 = Number(prompt(`Digite o PRIMEIRO número!`))
console.log(`PRIMEIRO número = ${num1}`);
let num2 = Number(prompt(`Digite o SEGUNDO número!`))
console.log(`SEGUNDO número = ${num2}`);
let num3 = Number(prompt(`Digite o TERCEIRO número!`))
console.log(`TERCEIRO número = ${num3}`);

let numeros = [];

const maior = () => {
  let maior = num1;
  if(num2 > maior) {
    maior = num2;
 }
  if(num3 > maior) {
    maior = num3;
 }

return `O maior número é ${maior}`
}

const menor = () => {
  let menor = num1
  if(num2 < menor) {
    menor = num2
 }
  if(num3 < menor) {
    menor = num3
 }

return `O menor número é ${menor}`
}

console.log(maior())
console.log(menor())