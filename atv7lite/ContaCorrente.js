import { ContaBancaria } from "./ContaBancaria.js";

export class ContaCorrente extends ContaBancaria {
  constructor(numero, agencia, saldo, cartaoCredito) {
    super(numero, agencia, "Conta Corrente", saldo);
    this.cartaoCredito = cartaoCredito;
  }

  getCartaoCredito() {
    return this.cartaoCredito;
  }

  setCartaoCredito(){
    this.cartaoCredito.tipoCartao=tipoCartao;
  }
}
