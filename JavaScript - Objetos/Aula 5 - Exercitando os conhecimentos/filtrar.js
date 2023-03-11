const clientes = require("./clientes.json");

// function filtrarApartamentoSemComplemento(clientes) {
//   return clientes.filter((cliente) => {
//     return (
//       cliente.endereco.apartamento &&
//       !cliente.endereco.hasOwnProperty("complemento")
//     );
//   });
// }

// const filtrados = filtrarApartamentoSemComplemento(clientes);

// console.log(filtrados);


//Procurando pelo numero

const cliente = clientes.filter(
  (clientes) => clientes.endereco.numero === "89"
);

console.log(cliente);