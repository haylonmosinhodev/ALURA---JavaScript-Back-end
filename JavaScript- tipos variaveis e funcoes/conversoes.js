// tipos de dado
// booleanos

// conversao implicita

const numero = 456;
const numeroString = "456";


//Number ()
// String ()
console.log (numero + Number(numeroString)); //FALSE

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.



// conversao explicita