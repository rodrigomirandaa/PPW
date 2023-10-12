import { ContaBancaria } from "./ContaBancaria.js";

export class ContaPoupanca extends ContaBancaria{
    constructor(numero,agencia,saldo){
        super(numero,agencia,"Conta Poupança",saldo)
    }
};