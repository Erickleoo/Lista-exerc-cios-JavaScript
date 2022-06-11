/* 10 - Faça um programa que recebe três números do usuário, e identifica o maior através
de uma função e o menor número através de outra função. Utilize const e/ou let nas
declarações de variáveis e a sintaxe Arrow function na criação das funções. Utilize
Interpolação para imprimir no console. */



let numero1 = Number(prompt('Digite o PRIMEIRO número!'));
console.log(`O primeiro número foi: ${numero1}`)
let numero2 = Number(prompt('Digite o SEGUNDO número!'));
console.log(`O segundo número foi: ${numero2}`)
let numero3 = Number(prompt('Digite o TERCEIRO número!'));
console.log(`O terceiro número foi: ${numero3}`)

const maior = () => {
  let maior = numero1;

  if(numero2 > numero1) {
    maior = numero2;
  }

  if(numero3 > numero1) {
    maior = numero3;
  }

  return `O maior número é ${maior}`;
}

const menor = () => {
  let menor = numero1;

  if(numero2 < menor) {
    menor = numero2;
  }

  if(numero3 < menor) {
    menor = numero3;
  }

  return `O menor número é ${menor}`;
}

console.log(maior())
console.log(menor())