// Selecionar elementos HTML da nossa pág. usando o document.
// 1. Pegar pelo nome da tag
const todosH1 = document.getElementsByTagName('h1');
console.log(todosH1);

// 2. Pegar pelo nome da classe
const todosClasseParagrafos = document.getElementsByClassName('paragrafo');
console.log(todosClasseParagrafos);

// 3. Pegar pelo nome da name
const emailInput = document.getElementsByName('email');
console.log(emailInput);

// 4. Pegar pelo id
const jsLogoImg = document.getElementById('js-logo');
console.log(jsLogoImg);

// 5. Pegar usando querySelector (pega o primeiro elemento que combinar com o seletor)
const imagem = document.querySelector('body > img');
console.log(imagem);

// 6. Pegar usando querySelectorAll (pega todos os elementos que combinarem com o seletor)
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);   