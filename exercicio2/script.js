let primeiroNum = Number (prompt("Digite o primeiro número"));
let segundoNum = Number (prompt("Digite o segundo número"));

const numMaior = primeiroNum > segundoNum;
const numIgual = primeiroNum === segundoNum
const primeiroNumDivisivel = primeiroNum % segundoNum == 0
const segundoNumDivisivel = segundoNum % primeiroNum == 0

console.log("O primeiro número é maior que o segundo?", numMaior)
console.log("O primeiro número é igual ao segundo?", numIgual)
console.log("O primeiro número é divisível pelo segundo?", primeiroNumDivisivel)
console.log("O segundo número é divisível pelo primeiro?", segundoNumDivisivel)
