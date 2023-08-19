function executar(fn, num1 = 0, num2 = 0){
    if(typeof fn === 'function'){
        console.log(fn(num1, num2));
    };
};

function somar(a,b){
    return a+b;
};
function subtrair(a,b){
    return a-b;
};
function multiplicar(a,b){
    return a*b;
};
function dividir(a,b){
    return a/b;
}

while(true){
    
    entrada = prompt('Digite o simbolo da operação que deseja fazer ou qualquer outra coisa para sair: ');

    if (entrada === '+'){
    x = prompt('Digite o valor de X: ');
    y = prompt('Digite o valor de y: ');
    x = parseFloat(x);
    y = parseFloat(y);
    executar(somar, x, y);
    }else if (entrada === '-'){
    x = prompt('Digite o valor de X: ');
    y = prompt('Digite o valor de y: ');
    x = parseFloat(x);
    y = parseFloat(y);
    executar(subtrair, x, y);
    }else if (entrada === '*'){
    x = prompt('Digite o valor de X: ');
    y = prompt('Digite o valor de y: ');
    x = parseFloat(x);
    y = parseFloat(y);
    executar(multiplicar, x, y);
    }else if (entrada === '/'){
    x = prompt('Digite o valor de X: ');
    y = prompt('Digite o valor de y: ');
    x = parseFloat(x);
    y = parseFloat(y);
    executar(dividir, x, y);
    }else{
        break;
    }
}
