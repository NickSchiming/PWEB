function Retangulo(x, y) {
    this.x = x;
    this.y = y;

    this.calcArea = function() {
        return x * y;
    }
}

const ret1 = new Retangulo(12, 32);

console.log(ret1.calcArea());


function Conta() {
    var nome;
    var banco;
    var numConta;
    var saldo;

    this.getNome = function() {
        return nome;
    };
    this.setNome = function(value) {
        nome = value;
    };

    this.getBanco = function() {
        return banco;
    };
    this.setBanco = function(value) {
        banco = value;
    };

    this.getNumConta = function() {
        return numConta;
    };
    this.setNumConta = function(value) {
        numConta = value;
    };

    this.getSaldo = function() {
        return saldo;
    };
    this.setSaldo = function(value) {
        saldo = value;
    };


}

function Corrente() {
    var saldoEspecial;

    this.getSaldoEspecial = function() {
        return saldoEspecial;
    };
    this.setSaldoEspecial = function(value) {
        saldoEspecial = value;
    };

}

function Poupanca() {
    var juros;
    var dtVencimento;

    this.getJuros = function() {
        return juros;
    };
    this.setJuros = function(value) {
        juros = value;
    };

    this.getDtVencimento = function() {
        return dtVencimento;
    };
    this.setDtVencimento = function(value) {
        dtVencimento = value;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();


CC = new Corrente();
CP = new Poupanca();

CC.setNome("Nicolas")
CC.setBanco("Santander");
CC.setNumConta(14);
CC.setSaldo(1400);
CC.setSaldoEspecial(600);

CP.setNome("Joao")
CP.setBanco("Itau");
CP.setNumConta(15);
CP.setSaldo(2000);
CP.setJuros(2);
CP.setDtVencimento("15/02/2023");

alert(CC.getNome() + '\n' + CC.getBanco() + '\n' + CC.getNumConta() + '\n' + CC.getSaldo() + '\n' + CC.getSaldoEspecial() + '\n' +
    '\n' + CP.getNome() + '\n' + CP.getBanco() + '\n' + CP.getNumConta() + '\n' + CP.getSaldo() + '\n' +
    CP.getJuros() + '\n' + CP.getDtVencimento());