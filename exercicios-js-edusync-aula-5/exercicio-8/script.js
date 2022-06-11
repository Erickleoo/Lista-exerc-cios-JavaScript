/* 9 - Faça uma função que informe a quantidade de dígitos de um determinado número
inteiro informado. Utilize const e/ou let nas declarações de variáveis e a sintaxe Arrow
function na criação das funções. Utilize Interpolação para imprimir no console.*/


const numeroString = () => {
  let numero = prompt(`Digite um número! `)
  return `O numero digitado foi ${Number(numero)} e ele possui ${numero.length} digitos`
  

}

console.log(numeroString());

