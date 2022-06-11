/* 8 - Faça um programa para imprimir no console :
para um n informado pelo usuário. Use uma função que receba um valor n inteiro e
imprima até a n-ésima linha. Utilize const e/ou let nas declarações de variáveis e a sintaxe
Arrow function na criação das funções. Utilize Interpolação para imprimir no console. */



const imprimirValor = () => {
  let valor = Number(prompt(`Digite um valor: `));
  console.log(valor);
  var fora = '';
  for (i = 1; i <= valor; i++) {
      for (j = 1; j <= i; j++) {
          fora += j + '  ';
      }
      console.log(fora);
      fora = '';
  }
}

console.log(imprimirValor())