/* 2) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...". */

function diferente(valor) {   
  const digitado = typeof valor    
  if(digitado  == "boolean") {
    return !valor 
  }else if (digitado == "number"){
    return -valor 
  }else {    
    return `booleano ou número esperados, mas o parâmetro é do digitado ${digitado}`
  }
}

console.log(diferente('aaaa'))