// Selecionar elementos HTML da nossa pág. usando o document.
// 1. Pegar pelo nome da tag
const todosH1 = document.getElementsByTagName('h1');
console.log(todosH1);

// 2. Pegar pelo nome da classe
const todosClasseParagrafos = document.getElementsByClassName('paragrafo');
console.log(todosClasseParagrafos);

// 3. Pegar pelo nome da 'name' do formulário
const emailInput = document.getElementsByName('email');
console.log(emailInput);

// 4. Pegar pelo id
const jsLogoImg = document.getElementById('js-logo');
console.log(jsLogoImg);

// 5. Pegar usando querySelector (pega o primeiro elemento que combinar com o seletor)
const imagem = document.querySelector('body > img'); // (logo abaixo do body, existe a tag img)
console.log(imagem);

// 6. Pegar usando querySelectorAll (pega todos os elementos que combinarem com o seletor)
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

// Conferindo/Alterando o conteúdo da tag.
const primeiroParagrafo = document.querySelector('p.paragrafo'); // seleciona o primeiro parágrafo com a classe (.)'paragrafo'
console.log(primeiroParagrafo)
console.log('textContent:', primeiroParagrafo.textContent); // ignora tags e mostra somente o texto, conteúdo em texto. 
console.log('innerHTML:', primeiroParagrafo.innerHTML); // mostra o conteúdo HTML com tags e textos
primeiroParagrafo.textContent = 'Outra coisa'

console.clear();
// Pegando um elemento em particular e coloca no formulario
emailInput[0].value = 'drizi@email.com';

// Criando elementos na pasta html
const listaUl = document.querySelector('ul#lista');
const listaLis = document.querySelectorAll('ul > li');// pega todas as lis que são filhas diretas da ul
const novaTagLi = document.createElement('li'); //  cria uma nova tag li vazia
novaTagLi.textContent = 'Quarto item'; // adiciona texto dentro da tag li
console.log(novaTagLi);
// listaUl.appendChild(novaTagLi); // adiciona a nova tag li(filha) dentro da ul(pai) no final da lista

// Inserindo um elemento num lugar específico
listaUl.insertBefore(novaTagLi, listaLis[3]);
// dentro da listaUl inserir uma nova Tag, antes da posição 3

// Remover elemento
listaUl.removeChild(novaTagLi);
// dentro da listaUl remover a novaTagLi