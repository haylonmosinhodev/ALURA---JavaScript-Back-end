const notas = [10, 10, 10, 10]
somaDasNotas = 0;

for (i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]

    console.log(somaDasNotas);

}
console.log(`A media das Notas é : ${somaDasNotas / notas.length}. `);