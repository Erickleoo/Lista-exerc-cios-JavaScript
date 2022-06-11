/* Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$
25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo em
JavaScript para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças
adquiridas e retornar no console, utilizando Interpolação, o valor a ser pago pelo cliente.
Utilize const e/ou let nas declarações de variáveis. */

function venderFrutas(morangos, macas, precoCertMor, precoCertMac, precoTotal) {
  morangos = parseInt(prompt('Informe a quantidade de morangos em [kg]: '));
  macas = parseInt(prompt('Informe a quantidade de maçãs em [kg]: '));
  console.log(`Quantidade de maçãs: ${macas}`)
  console.log(`Quantidade de morangos: ${morangos}`)

  const frutas = {
    precoMoraAte5: 2.50,
    precoMoraAcim: 2.20,
    precoMacAte5: 1.80,
    precoMacAcim: 1.50,
  }

  frutas.precoMoraAte5 *= morangos;
  frutas.precoMoraAcim *= morangos;

  frutas.precoMacAte5 *= macas;
  frutas.precoMacAcim *= macas;


   if(morangos > 5 && macas > 5) {
     precoCertMor = frutas.precoMoraAte5;
     precoCertMac = frutas.precoMacAte5 ;
   } else {
     precoCertMor = frutas.precoMoraAcim;
     precoCertMac = frutas.precoMacAcim;
   }

   precoTotal = precoCertMac + precoCertMor;

   if(precoTotal > 25 || (macas + morangos) > 8) {
     precoTotal = precoTotal - (precoTotal * 0.1)
     console.log(`O preco final ficou: ${precoTotal}`)
   } else {
     console.log(`O preco final foi: ${precoTotal}`)
   }

}

console.log(venderFrutas());