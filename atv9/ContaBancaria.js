export class ContaBancaria{
        constructor(numero,agencia,tipo,saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.tipo = tipo;
        this.saldo = saldo;
    };
    getTipo(){
        return this.tipo;
    };
    getSaldo(){
        return this.saldo;
    };

    setSaldo(){
        return this.saldo();
    };

    sacar(valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado`);
        }else{
            console.log("Saldo insuficiente ou valor invalido")
        };
    };

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log(`Deposito de R$ ${valor} realizado`);
        }else{
            console.log("Valor invalido");
        };
    };
};