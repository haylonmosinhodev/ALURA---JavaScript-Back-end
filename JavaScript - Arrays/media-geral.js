const numeros = [43, 50, 65, 12]


// ARROW FUNCTION
// const soma = numeros.reduce((acc, atual) => atual + acc, 0)


//MAIS DE UMA LINHA É OBRIGATORIO ( ) E {}
const soma = numeros.reduce(function (acc, atual){
    return atual + acc
1},0)

console.log(soma)
 //170