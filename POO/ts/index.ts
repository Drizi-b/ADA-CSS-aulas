// Aula POO
// Classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    //  atributos: características
    nome: string;
    idade: number;
    altura: number;

    // Métodos: ação (funções, mas ñ se usa function)
    // Método construtor
    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    dormir() {
    }
}
// Criando/instanciando uma pessoa a partir da definição da classe Pessoa
const pessoa1 = new Pessoa('Adriana', 50, 1.58); // Os () chamam o método construtor

console.log(pessoa1);
console.log(pessoa1.nome);