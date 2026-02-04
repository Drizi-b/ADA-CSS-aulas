const form = document.querySelector("#toDo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const toDoListUl = document.querySelector("#toDo-list-ul");

let tasks = []

form.addEventListener("submit", (event) => {
  event.preventDefault() // prevenindo o comportamento padrão do form (recarregar a página)

  const taskTitle = taskTitleInput.value

  if (taskTitle.length < 3) {
    alert("O título da tarefa deve ter pelo menos 3 caracteres.")
    return;
  }
  tasks.push({ title: taskTitle, done: false })

  const li = document.createElement("li")
  li.textContent = taskTitle
  
  const input = document.createElement("input")
  input.setAttribute("type", "checkbox")
  input.addEventListener("change", (event) => {
    const liToToggle = event.target.parentElement
  
  })



  const span = document.createElement("span")
  span.textContent = taskTitle

  const button = document.createElement("button")
  button.textContent = "Remover"
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement

    const titleToRemove = liToRemove.querySelector("span").textContent

    tasks = tasks.filter(t => t.title !== titleToRemove)
    
    toDoListUl.removeChild(liToRemove)

  li.appendChild(input)
  li.appendChild(span)
  li.appendChild(button)

  toDoListUl.appendChild(li)

  taskTitleInput.value = "" // limpando o input após adicionar a tarefa
})
})