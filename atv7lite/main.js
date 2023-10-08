// main.js
import { ContaBancaria } from './ContaBancaria.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaUniversitaria } from './ContaUniversitaria.js';

class Banco{

  static main() {
  
  //criando a instancia 
  const conta = new ContaBancaria("12345", "Agência ABC", "Conta Corrente", 1000);

  console.log(`** Bem vindo a: ${conta.getTipo()}**`);

  console.log("Saldo inicial:", conta.getSaldo());
  conta.depositar(500);
  console.log("Saldo após depósito:", conta.getSaldo());
  conta.sacar(300);
  console.log("Saldo após saque:", conta.getSaldo());
  console.log("-------------------");
}

static corrente(){
  //criando a instancia 
  const contaCorrente = new ContaCorrente("55555", "Agência XPT", 2000, "Platinum");
  
  console.log(`** Bem vindo a: ${contaCorrente.getTipo()}**`);
  console.log("Cartão de crédito:", contaCorrente.getCartaoCredito());
  console.log("-------------------");
}

static universitaria(){
  const contaUniversitaria = new ContaUniversitaria("44444", "Agência CCC", 1000);
  
  console.log(`** Bem vindo a: ${contaUniversitaria.getTipo()}**`);
  contaUniversitaria.sacar(300);
  console.log("Saldo após saque:", contaUniversitaria.getSaldo());

  contaUniversitaria.sacar(500);

  console.log("-------------------");
}

}

// Chamando a função principal (main)
Banco.main();
Banco.corrente();
Banco.universitaria();