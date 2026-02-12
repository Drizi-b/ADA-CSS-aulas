// 1. Interface
interface ItemCurriculo {
  // Objeto
  titulo: string;
  renderizar(): HTMLDivElement;
}
// 2. Classe para exper profissional
class ExperienciaProfissional implements ItemCurriculo {
  constructor(
    public titulo: string,
    public empresa: string,
    public periodo: string,
  ) {}

  renderizar(): HTMLDivElement {
    const div = document.createElement("div");
    div.className = "item-curriculo formacao";
    div.innerHTML = `
        <h3>${this.titulo}</h3>
        <p><strong>Empresa:</strong> ${this.empresa}</p>
        <p><strong>Período:</strong> ${this.periodo}</p>
        `;
    return div;
  }
}
// 3. Classe para formação acadêmica
class FormacaoAcademica implements ItemCurriculo {
  constructor(
    public titulo: string,
    public instituicao: string,
    public anoConclusao: string,
  ) {}

  renderizar(): HTMLDivElement {
    const div = document.createElement("div");
    div.className = "item-curriculo experiencia";
    div.innerHTML = `
        <h3>${this.titulo}</h3>
        <p><strong>Instituição:</strong> ${this.instituicao}</p>
        <p><strong>Concluído em:</strong> ${this.anoConclusao}</p>
        `;
    return div;
  }
}
// 4. Manipulacao do Dom (adicionando dinamica)
const container = document.getElementById("conteudo-curriculo");

// Criar um array que aceite qlq coisa que assine o contrato curriculo
const meuCurriculo: ItemCurriculo[] = [
  new ExperienciaProfissional(
    "Desenvolvedor FrontEnd",
    "Tech Solutions",
    "2023 - Presente",
  ),
  new FormacaoAcademica(
    "Bacharel em Ciência da Computação",
    "Universidade XYZ",
    "2022",
  ),
  new ExperienciaProfissional(
    "Estagiário de TI",
    "Empresa ABC",
    "2021 - 2022"
),
];

// Iterando sobre os itens e jogando no HTML
if (container) {
  meuCurriculo.forEach((item) => {
    container.appendChild(item.renderizar());
  });
}
