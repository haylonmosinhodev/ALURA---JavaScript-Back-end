const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
    {
        rua: "R. Arnold Bombado",
        numero: 1000,
        apartamento: true,
        complemento: "ap 9",
      },

  ];
  
  //código omitido

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[1],
  };
  
  console.log(encomenda);

