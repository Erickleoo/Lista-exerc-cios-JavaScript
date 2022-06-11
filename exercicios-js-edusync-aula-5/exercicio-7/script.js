/* 7 - Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou
não. Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n. Utilize
const e/ou let nas declarações de variáveis e a sintaxe Arrow function na criação das
funções. Utilize Interpolação para imprimir no console.*/

const num = Number(prompt('Digite um numero!'))
console.log(`O numero digitado foi: ${num}`)


const ePrimo = () => {
  
  if(num === 1 || num === 0){
    return `${num} Não é um número inteiro ou primo`
  }

  for(i = 2; i * i <= num; i++){
    if(num % i == 0)
    return `${num} Não é número primo!`
  }

  return `${num} é um número primo!`
  
}

function todosPrimos() {

  for(i = 1; i <= num; i++) {
    let cont = 0;

    for(j = 2; j < i; j++) {
      if(i % j == 0) {
        cont = 1;
        break
      }

    }

    if(i > 1 && cont == 0) {
      console.log(i)
    }

 } 

}

console.log(ePrimo())
console.log(todosPrimos());




