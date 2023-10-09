import { ContaBancaria } from "./ContaBancaria.js";

export class ContaUniversitaria extends ContaBancaria{
    constructor(numero,agencia,saldo){
        super(numero,agencia,"Conta Universitaria",saldo)
    }

    sacar(valor){
        if(valor < 500){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado`);
        }else{
            console.log("Valor invalido!")
        };
    };


    
}
