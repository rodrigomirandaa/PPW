function verificarParImpar(entrada) {
  if (typeof entrada === 'number') {
    if (entrada % 2 === 0) {
      console.log('A entrada é um número par.');
    } else {
      console.log('A entrada é um número ímpar.');
    }
  }
}

var entrada;

while(true){
    entrada = prompt('Digite a entrada: ');

    if (entrada === 'sair'){
        break;
    }
    
    entrada = parseFloat(entrada); // Converte a entrada para número
    
    if (!isNaN(entrada)) {
      verificarParImpar(entrada);
    } else {
      console.log('A entrada é uma string.');
    }
}

