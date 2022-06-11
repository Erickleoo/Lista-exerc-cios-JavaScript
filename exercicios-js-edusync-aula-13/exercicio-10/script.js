/* 10 - Escreva um algoritmo em Javascript que exiba no console os 15 primeiros números da 
série Fibonacci: 1, 1, 2, 3, 5, 8, 13…*/

function serieFibonacci(number) {
  const fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci  
}

console.log(serieFibonacci(15))
