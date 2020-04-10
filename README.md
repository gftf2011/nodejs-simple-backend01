<h1 align="center">
  <img alt="Imagem da Logo do Framework node.js" src="https://shippo-static.s3.amazonaws.com/img/programming/nodejs.svg" height="200" />
</h1>
<h2 align="center">Node.JS simple backend project | version: 1</h2>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gftf2011/nodejs-simple-backend01">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gftf2011/nodejs-simple-backend01">
  
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/gftf2011/nodejs-simple-backend01">

  <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/64440c303fa24e9c93e263dab133ae68">

  <img alt="GitHub forks" src="https://img.shields.io/github/forks/gftf2011/nodejs-simple-backend01">

  <img alt="Github stars" src="https://img.shields.io/github/stars/gftf2011/nodejs-simple-backend01">

  <img alt="License" src="https://img.shields.io/github/license/gftf2011/nodejs-simple-backend01">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gftf2011/nodejs-simple-backend01">
</p>

----

<h3 align="center">Este é um simples projeto para testar rotas de backend criadas com Node.JS</h3>

### :ferris_wheel: Para rodar a Aplicação

https://app.codacy.com/manual/gftf2011/nodejs-simple-backend01?utm_source=github.com&utm_medium=referral&utm_content=gftf2011/nodejs-simple-backend01&utm_campaign=Badge_Grade_Dashboard)

  
1.  Instale o node.js em [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

2.  Instale o YARN em [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/)

3.  Clone o projeto em uma pasta no seu PC :computer:

4.  Abra o projeto em um editor de texto e rode o comando 'yarn' para baixar as depêndencias

5.  Faça o download do Postman em (https://www.getpostman.com/downloads/)[https://www.getpostman.com/downloads/]

6.  Utilize o comando 'yarn dev' para subir :rocket: a aplicação

### Rotas da aplicação

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```
