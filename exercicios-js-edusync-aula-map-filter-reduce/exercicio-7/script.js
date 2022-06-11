/* 8 - Dado o array:
Exiba no console as seguintes informações:
A. Empresas criadas depois dos anos 2000.
B. O nome de cada empresa e de seu CEO.
C. O valor de todas as empresas somadas.
*/

const empresas = [
  { 
  nome:'Samsung',
  valorDeMercado: 50, 
  CEO: 'Kim Hyun Suk',
  anoDeCriacao: 1938
  },

  { 
  nome: 'Microsoft',
  valorDeMercado: 415, 
  CEO: 'Satya Nadella',
  anoDeCriacao: 1975 
  },

  { 
  nome: 'Intel',
  valorDeMercado: 117, 
  CEO:'Brian Krzanich',
  anoDeCriacao: 1968
  },

  { 
  nome: 'Facebook',
  valorDeMercado: 383, 
  CEO:'MarkZuckerberg', 
  anoDeCriacao: 2004
  },

  { 
  nome: 'Spotify',
  valorDeMercado: 30, 
  CEO:'Daniel Ek',
  anoDeCriacao: 2006 
  },

  {
  nome: 'Apple', 
  valorDeMercado: 845, 
  CEO: 'Tim Cook',
  anoDeCriacao: 1976}
];

const empresasApos2000 = empresas.filter((empresas) => {
  return empresas.anoDeCriacao > 2000
});
console.log(empresasApos2000)

const nomes = empresas.map((empresas) => {
  const nomeEmpresa = empresas.nome
  const nomeCEO = empresas.CEO
  const nomesAmbos = nomeEmpresa + " " + nomeCEO
  return nomesAmbos
});
console.log(nomes)

const somaEmpresas = empresas.map(empresas => empresas.valorDeMercado)
.reduce((acumulador, atual) => {
  return acumulador + atual
});


console.log(somaEmpresas)
 