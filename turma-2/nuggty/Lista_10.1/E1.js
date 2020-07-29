class Usuario {
    constructor() {
      this.nome = 'Pedro';
      this.categoria = 'passageiro';
      this.email = 'pedro@pedro.com.vc';
      this.celular = '19999999999';
      this.enderecoPrimario = 'Rua dos Bobos, 0';
      this.pagamento = 'Vale-Refeição';
      this.transporte = 'Carro';
      this.paradas = 1;
    }
}

let print = new Usuario();
console.log(print);