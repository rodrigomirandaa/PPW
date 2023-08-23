let n = prompt("Digite uma palavra: ");

function isPalindrome(word) {
  // Remove espaços em branco da palavra e converte para letras minúsculas
  var cleanedWord = word.replace(/\s/g, '').toLowerCase();

  var splitString = cleanedWord.split("");
  var reverseArray = splitString.reverse();
  var reversedWord = reverseArray.join("");

  if (cleanedWord === reversedWord) {
    return "É um palíndromo.";
  } else {
    return "Não é um palíndromo.";
  }
}

console.log("A palavra que você digitou: " + n);
console.log(isPalindrome(n));
