const form = document.querySelector("#toDo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const toDoListUl = document.querySelector("#toDo-list-ul");

let tasks = [];

function renderTasksOnHTML(taskTitle, done = false) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.checked = done;

  input.addEventListener("change", (event) => {
    const liToToggle = event.target.parentElement;
    const spanToToggle = liToToggle.querySelector("span");
    const isDone = event.target.checked;
    spanToToggle.style.textDecoration = isDone ? "line-through" : "none";

    // Atualiza tasks corretamente com map e atribuição
    tasks = tasks.map((t) => {
      if (t.title === spanToToggle.textContent) {
        return { title: t.title, done: isDone };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const span = document.createElement("span");
  span.textContent = taskTitle;
  if (done) {
    span.style.textDecoration = "line-through";  // Corrige: usa 'span', não 'spanToToggle'
  }

  const button = document.createElement("button");
  button.textContent = "Excluir";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector("span").textContent;

    // Remove corretamente com filter e atribuição
    tasks = tasks.filter((t) => t.title !== titleToRemove);
    toDoListUl.removeChild(liToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  toDoListUl.appendChild(li);  // Apenas uma vez, no final
}
window.onload = () => {
  toDoListUl.innerHTML = ""; // Limpa duplicatas
  const tasksOnLocalStorage = localStorage.getItem("tasks");
  if (!tasksOnLocalStorage) return;
  tasks = JSON.parse(tasksOnLocalStorage);
  tasks.forEach((t) => renderTasksOnHTML(t.title, t.done));
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter mais que 3 caracteres.");
    return;
  }
  // Adicionando a nova tarefa no array 'tasks'
  tasks.push({
    title: taskTitle,
    done: false
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasksOnHTML(taskTitle);

  taskTitleInput.value = ""; // limpando o input
});
