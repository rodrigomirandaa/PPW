//menu switch case
//cadastrar produtos
//cadastrar pessoas
//sortear
//sair

var produtos = [];
var pessoas = [];

function registrarProdutos(){
    var nomeProduto = prompt("Digite o nome do produto: ");
    produtos.push(nomeProduto);
    alert("Produto cadastrado: " + nomeProduto);
}

function registrarPessoas(){
    var nomePessoa = prompt("Digite o nome da pessoa: ");
    pessoas.push(nomePessoa);
    alert("Pessoa cadastrada: " + nomePessoa);
}

function sortear(){
    if(pessoas.length === 0){
        alert("Não tem pessoas cadastradas");
        return;
        }
//math.random gera um numero decimal
//math.floor arredonda o numero
//(pessoas.length) seta o limite superior para o maior numero
    var numeroSorteado = Math.floor(Math.random() * pessoas.length);
    var pessoaGanhadora = pessoas[numeroSorteado];

    if(produtos.length === 0){
        alert(pessoaGanhadora + "ganhou nada pois não tem produto cadastrado.");
    } else{
        var idProdutoSorteado = Math.floor(Math.random() * produtos.length);
        var produtoSorteado = produtos[idProdutoSorteado];
        alert(pessoaGanhadora + " ganhou o produto: " + produtoSorteado);

    }

}

function menu(){
    var opcao = prompt("Escolha uma opção:\n1. Cadastrar produto\n2. Cadastrar pessoa\n3. Realizar sorteio\n4. Sair\n");

    switch(opcao){
        case '1':
            registrarProdutos();
            break;

        case '2':
            registrarPessoas();
            break;
        
        case '3':
            sortear();
            break;

        case '4':
            return;
    
    }
    menu();
}

menu();
