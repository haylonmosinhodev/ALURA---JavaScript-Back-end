const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "116665475"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log (`Pagamento Realizando. Novo Saldo ${this.saldo}`);
        }
    }
  };

  cliente.efetuaPagamento(25);