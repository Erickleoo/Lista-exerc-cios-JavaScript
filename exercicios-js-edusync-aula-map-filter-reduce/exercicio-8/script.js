/* 1) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
receberNomeDoMes(1) // retornará "janeiro"
receberNomeDoMes(4) // retornará "abril".
*/



const numeroMes = (numero) => {
  numero = Number(prompt('Digite um número: '))

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return meses[--numero]
}

console.log(numeroMes())

