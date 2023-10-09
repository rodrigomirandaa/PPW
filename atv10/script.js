// script.js

// Lista de contas bancárias
const contas = [];

function inserirConta() {
    const numero = document.getElementById("numero").value;
    const agencia = document.getElementById("agencia").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    // Criar uma nova instância da conta com base no tipo
    let novaConta;
    switch (tipo) {
        case "Conta Corrente":
            novaConta = new ContaCorrente(numero, agencia, saldo, false);
            break;
        case "Conta Poupança":
            novaConta = new ContaPoupanca(numero, agencia, saldo);
            break;
        case "Conta Universitária":
            novaConta = new ContaUniversitaria(numero, agencia, saldo);
            break;
        default:
            alert("Tipo de conta inválido");
            return;
    }

    // Adicionar a nova conta à lista
    contas.push(novaConta);

    // Limpar os campos de entrada
    document.getElementById("numero").value = "";
    document.getElementById("agencia").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("saldo").value = "";

    alert("Conta inserida com sucesso!");
}

function visualizarContas() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = ""; // Limpar a lista

    // Exibir as contas na lista
    for (const conta of contas) {
        const itemLista = document.createElement("li");
        itemLista.textContent = `${conta.tipo} - Saldo: R$ ${conta.getSaldo().toFixed(2)}`;
        listaContas.appendChild(itemLista);
    }
}

function deletarConta() {
    const indiceSelecionado = /* lógica para obter o índice da conta selecionada */;
    if (indiceSelecionado !== -1) {
        contas.splice(indiceSelecionado, 1); // Remover a conta
        alert("Conta deletada com sucesso!");
        visualizarContas(); // Atualizar a lista após a remoção
    } else {
        alert("Selecione uma conta para deletar.");
    }
}
