console.log("")
console.log("---------Instrução---------");
console.log("Existem três listas de exercicios.");
console.log("Escolha uma lista. Feito isto voce deve escolher qual questão você");
console.log("quer resolver. As atividades de cada lista variam.")

console.log("");

var prox = 1;
var fim = -1;
console.log("Digite " + prox + " para PROXIMO, " + fim + " para encerrar o programa.");

pacote=require('readline-sync')
opc=pacote.questionFloat("O que voce deseja fazer? ")
if (opc==1) {
    invocar=require('./ListaPrincipal')
} else {
    console.log('programa encerrado.')
}