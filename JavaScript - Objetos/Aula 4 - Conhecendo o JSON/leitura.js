const dados = require("./cliente.json");



//"Stringficação"

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

//"Traduzir" a string para objeto

//código omitido

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);



console.log (dados);
console.log (typeof(dados));