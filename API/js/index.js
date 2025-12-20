// Fetch API
// then/catch
// fetch('https://viacep.com.br/ws/01001000/json/')
//   .then((resposta) => {
//      resposta.json().then((dados) => console.log(dados))
// })
//   .catch((erro) => {
//      console.log(erro)
//   })

// async/await

// async function obterDadosDoCEP() {
// try {
//         const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
//     const dados = await resposta.json()
//     console.log(dados)
// } catch(erro) {
//     console.log('Deu erro!', erro)
// } finally {
//     console.log('Terminou a requisição.')
// }
// }
// obterDadosDoCEP()

// Dummy

async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "63f77cc1b7f489f0b351b30f",
    },
  });
  const users = await resposta.json();
  console.log(users.data);
}

async function getUser() {
    const resposta = await fetch("https://dummyapi.io/data/v1/user/id do usuario", {
    headers: {
      "app-id": "63f77cc1b7f489f0b351b30f",
    },
  });
  const user = await resposta.json();
  console.log(user);
}

async function creatUser() {
  const userData = {
    firstName: "Adriana",
    lastName: "Balon",
    email: "adriana@email.com",
  };
  try {await fetch("https://dummyapi.io/data/v1/user/create", {
    method: "POST",
    headers: {
      "app-id": "63f77cc1b7f489f0b351b30f",
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
} catch (erro) {
    console.log('Deu erro ao tentar criar um novo usuário', erro)
}
}
