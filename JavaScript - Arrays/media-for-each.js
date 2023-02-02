const notas = [10, 6.5, 8 ,7.5]

let somaDasNotas = 0;

notas.forEach (function (nota, indice){
somaDasNotas += nota;
console.log (indice);

});


console.log(`A media das Notas é : ${somaDasNotas / notas.length}. `);


//notas.forEach = fornece valor do elemenos e indices. sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamen

