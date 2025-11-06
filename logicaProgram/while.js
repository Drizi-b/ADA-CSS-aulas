const numeroAleatorio = parseInt(Math.random() * 10)
let quantidadeTentativas = 0
let numeroUsuario = Number(prompt.question("Informe um numero de 0 a 10: "))
while (numeroAleatorio !== numeroUsuario) {
    console.log("Voce errou, tente novamente...")
    numeroUsuario = Number(prompt.question("Informe um numero de 0 a 10: "))
}
console.log("Acertô Mizeravi!!")