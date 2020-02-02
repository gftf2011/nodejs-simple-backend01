let counter = 0;

const express = require('express');

const server = express();

server.use(express.json());

let projetos = [
    {
        id: "1",
        title: "Projeto 1",
        tasks: ["task 1", "task 2"]
    },
    {
        id: "2",
        title: "Projeto 2",
        tasks: ["task 1", "task 2", "task 3"]
    },
    {
        id: "1",
        title: "Projeto 1",
        tasks: ["task 1", "task 2"]
    }
];

// Start of Middlewares
server.use((req, res, next) => {
    console.log("--------------------");
    console.log(`Número de requisições: ${++counter}`);
    console.log(`Método chamado: ${req.method}`);
    console.log(`URL chamada: ${req.url}`);
    console.log("--------------------");

    return next();
});

function checkIfIdExists(req, res, next) {
    const { id } = req.params;

    const result = projetos.find(projeto => projeto.id == id);
    
    if (!result) {
        return res.json({error: `Error ID: ${req.params.id} does not exists!`});
    }
    return next();
}
// End of Middlewares

// Start of Routes
server.get('/projects', (req, res) => {
    return res.json(projetos);
});

server.post('/projects', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;

    projetos.push({id: id, title: title, tasks: []});

    return res.json(projetos);
});

server.post('/projects/:id/tasks', checkIfIdExists, (req, res) => {
    projetos.forEach((projeto, index) => {
        if (projeto.id == req.params.id) {
            projetos[index].tasks.push(req.body.title);
        }
    });

    return res.json(projetos);
});

server.put('/projects/:id', checkIfIdExists, (req, res) => {
    projetos.forEach((projeto, index) => {
        if (req.params.id == projeto.id) {
            projetos[index].title = req.body.title;
        }
    });

    return res.json(projetos);
});

server.delete('/projects/:id', checkIfIdExists, (req, res) => {
    projetos = projetos.filter(projeto => {
        return projeto.id != req.params.id;
    });

    return res.json(projetos);
});

// End of Routes

server.listen(3000);
