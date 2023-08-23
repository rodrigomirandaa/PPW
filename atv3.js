let x = prompt("Digite a palavra que deseja verificar: ");

function verificarPalindromo(palavra){
    
    var splitString = palavra.split("");
    var reverseArray = splitString.reverse();
    var reverseString = reverseArray.join("");
    
    if (palavra === reverseString){
        return "É um palindromo";
    } else {
        return "Não é um palindromo";
    }
}

console.log("A palavra que você digitou: " + x);
console.log(verificarPalindromo(x));
