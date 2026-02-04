const botaoAumentar = document.querySelector('#btnAumentar');
const botaoDiminuir = document.querySelector('#btnDiminuir');
const contador = document.querySelector('#contador');
const input = document.querySelector('#input');

botaoAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual + 1;
    botaoAumentar.classList.add("btn");
    botaoDiminuir.classList.remove("btn");
})

botaoDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual - 1;
    botaoAumentar.classList.remove("btn");
    botaoDiminuir.classList.add("btn");
})

input.addEventListener("input", () => {
  console.log(input.value);
})

//POE - Qdo o evento acontecer uma ação será disparada - evento entre parenteses e entre aspas - arrow function (onde alert é a ação/função).
// button.addEventListener('click', (event) => {
    
// })

// Adicionando estilos inline no elemento contador
contador.style.color = 'blue';
contador.style.padding = '10px';
contador.style.backgroundColor = 'lightgray';

// botaoAumentar.classList.add('btn');
// botaoDiminuir.classList.remove('btn');

// Mudar Tema
const themeButton = document.querySelector('#theme');
let darkTheme = false;

themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme;

    const body = document.querySelector('body');
    if (darkTheme) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
})