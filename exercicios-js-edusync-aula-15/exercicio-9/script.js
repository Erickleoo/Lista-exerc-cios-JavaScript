/* 9 - Faça um programa, com uma função que necessite de um argumento. A função retorna o
valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou
negativo*/

function argumentando(a) {
  a = parseInt(prompt('Digite um número: '))
  if( a > 0) {
    console.log('Positivo')
  }
  else {
    console.log('Negativo')
  } 
}

console.log(argumentando())