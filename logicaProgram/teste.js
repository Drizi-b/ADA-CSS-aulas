let prompt = require("prompt-sync") ();
let maiorNumero = 0;
let numeroInformado;
for (let i = 1; i <= 5; i++) {
    numeroInformado = prompt("Digite um numero: ")
        if (numeroInformado > maiorNumero) {
            maiorNumero = numeroInformado;
    } 
} console.log("O maior numero digitado foi: ", maiorNumero);