const fs = require("fs");

// * 1. CallBacks
// console.log('ANTES de ler o arq...')
// // Funçao assincrona (ler um arq leva um tempo)
// fs.readFile('./logicaProgram/arquivo.txt', (erro, conteudoDoArquivo) => {
//     if (erro) {
//         console.log('Ocorreu um erro: ', erro)
//     } else {
//         console.log(String(conteudoDoArquivo))
//     }
// })

// console.log('DEPOIS de ler o arq')

// SetTimeout

// console.log('antes do comando')
// setTimeout(() => {
//     console.log('Isso vai ser exec após 2 segundos')
// }, 2 * 1000)
// console.log('depois do comando')

// * 2.Promises
// console.log("antes do comando");
function lerArquivoPromise() {
return new Promise((resolve, reject) => {
  fs.readFile("./logicaProgram/arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
      reject("Ocorreu um erro: ", erro);
    } else {
      resolve(String(conteudoDoArquivo));
    }
  });
})}
// lerArquivoPromise() // para lidar com promessas usamos then, catch e finally
//   .then((retornoDoResolveDaPromessa) => {
//     console.log("Deu certo: ", retornoDoResolveDaPromessa);
//   })
//   .catch((erro) => {
//     console.log("Deu ruim: ", erro);
//   })
//   .finally(() => {
//     console.log("vai ser executado independente");
//   });

// * 3. async/await
async function leituraDeDados() {
    console.log('antes da promisse resolvida')
    try {
    const retornoDaPromessa = await lerArquivoPromise()
        console.log(retornoDaPromessa)
        console.log('depois da promisse resolvida')    
    } catch (err) {
        console.log(err)
        console.log('depois da promisse com erro')       
    } finally {
        console.log('dentro do finally')
    }
}
leituraDeDados()