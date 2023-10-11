import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaUniversitaria } from "./ContaUniversitaria.js";

//array p armazenas as contas
const contas = [];

export function inserirConta() {

    const numero = document.getElementById("numero").value;
    const agencia = document.getElementById("agencia").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    //verificando se todos os campos foram preenchidos
    if (!numero || !agencia || !tipo || isNaN(saldo)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }


    //criando objeto novaConta
    let novaConta;

    switch (tipo) {
        case "Conta Corrente":
            novaConta = new ContaCorrente(numero, agencia, saldo, false);
            break;
        case "Conta Poupanca":
            novaConta = new ContaPoupanca(numero, agencia, saldo);
            break;
        case "Conta Universitária":
            novaConta = new ContaUniversitaria(numero, agencia, saldo);
            break;
    }

    //adicionando ao vetor contas
    contas.push(novaConta);

    //limpando os campos
    document.getElementById("numero").value = "";
    document.getElementById("agencia").value = "";
    document.getElementById("tipo").value = "Conta Corrente";
    document.getElementById("saldo").value = "";

    alert("Conta inserida com sucesso!");
}

export function visualizarContas() {
    const listaContas = document.getElementById("listacontas");
    //limpando o logger das contas
    listaContas.innerHTML = "";
    //percorrendo o vetor contas[]
    for (const conta of contas) {
        //criando um elemento <li>
        const itemLista = document.createElement("li");
        itemLista.textContent = `Número: ${conta.numero}, Agência: ${conta.agencia}, Tipo: ${conta.tipo}, Saldo: R$ ${conta.saldo.toFixed(2)}`;
        listaContas.appendChild(itemLista);
    }

}

