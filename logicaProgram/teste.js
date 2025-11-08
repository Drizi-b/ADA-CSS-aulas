// let prompt = require("prompt-sync") ();
// let maiorNumero = 0;
// let numeroInformado;
// for (let i = 1; i <= 5; i++) {
//     numeroInformado = prompt("Digite um numero: ")
//         if (numeroInformado > maiorNumero) {
//             maiorNumero = numeroInformado;
//     } 
// } console.log("O maior numero digitado foi: ", maiorNumero);

const nome = "Welinton";
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
    if (i === 3) {
        break
    }
}
console.clear()
const arr = [2, 45, 32, 4, 15, 89];
for (const elemento of arr) {
    console.log(elemento)
}  