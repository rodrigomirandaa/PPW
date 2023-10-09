//array p armazenas as contas
const contas= [];

function inserirConta(){
    const numero = document.getElementById("numero").value;
    const agencia = document.getElementById("agencia").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("agencia").value);

//verificando se todos os campos foram preenchidos
if(!numero || !agencia || !tipo || isNaN(saldo)){
    alert("Preencha todos os campos corretamente!");
    return;
}
//criando objeto novaConta
const novaConta = {
    numero,
    agencia,
    tipo,
    saldo
};
//adicionando ao vetor contas
contas.push(novaConta);

console.log(novaConta);
console.log(contas);

}