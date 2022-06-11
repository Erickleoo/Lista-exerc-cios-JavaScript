/* 4 - A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um
algoritmo em JavaScript para coletar dados sobre o salário e número de filhos de cada
habitante e após as leituras, escreva no console, utilizando Interpolação:
a) Média de salário da população
b) Média do número de filhos
c) Maior salário dos habitantes
d) Percentual de pessoas com salário menor que R$ 1000,00 */


  let salario = 0;
  let mediaSalario = 0;
  let habitantes = 0;
  let somaSalario = 0;
  let maiorSalario = 0;
  let salarioMil = 0;
  let percentual = 0;
  let filhos = 0;
  let totalFilhos = 0;
  let mediaFilhos = 0;


do {
  salario = Number(prompt('Qual o seu salário: R$'));
  console.log(salario)

  habitantes += 1;
  somaSalario = salario + somaSalario;
  mediaSalario = somaSalario / habitantes;

  if (maiorSalario < salario) {
    maiorSalario = salario
  }
  if (salario <= 1000) {
    salarioMil++
    percentual = (salarioMil * 100) / habitantes
  }

  filhos = Number(prompt('Informe sua quantidade de filhos: '))
  console.log(filhos)

  totalFilhos = filhos + totalFilhos;
  mediaFilhos = totalFilhos / habitantes;

} while( salario > -1);

mediaSalario = mediaSalario.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
maiorSalario = maiorSalario.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });

console.log(`A média de salário da populacão é de: ${mediaSalario}`)
console.log(`A média do número de filhos é de: ${mediaFilhos}`)
console.log(`O maior salário dos habitantes é de: ${maiorSalario}`)
console.log(`Percentual de pessoas com salário menor que R$ 1000,00 é de ${parseInt(percentual)}%`)

