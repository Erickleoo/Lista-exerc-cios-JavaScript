/* 3) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

const mais = (numero) => {
  let valor = ''

  for(i = 0; i < numero; i++){
    valor += '+'
  }
  return valor
}

console.log(mais(2))
