/* 8 - Faça um programa, com uma função que necessite de três argumentos, e que forneça a
soma desses três argumentos através de uma função. Seu script também deve fornecer a
média dos três números, através de uma segunda função que chama a primeira. */

function soma(a, b, c) {
  return (a + b + c)
}

function media(num) {
  return num / 3
}

function chamandoValores() {
  a = parseInt(prompt('Primeiro numero: '))
  b = parseInt(prompt('Segundo numero: '))
  c = parseInt(prompt('Terceiro numero: '))

  console.log('Soma: ', soma(a, b, c))
  console.log('Media: ', media(soma(a, b, c)))
}

console.log(chamandoValores())