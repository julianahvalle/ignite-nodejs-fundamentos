const express = require('express');

const app = express();

app.use(express.json());

app.get("/coursers",(request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["curso 1","curso 2", "curso 3"]);
});

app.post("/coursers",(request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["curso 1","curso 2", "curso 3", "curso 4"])
});

app.put("/coursers/:id",(request,response) => {
    const { id } = request.params;
    console.log(id);    
    return response.json(["curso 6","curso 2", "curso 3", "curso 4"])
});

app.patch("/coursers/:id",(request,response) => {
    return response.json(["curso 6", "curso 7","curso 2", "curso 3", "curso 4"])
});

app.delete("/coursers/:id",(request,response) => {
    return response.json(["curso 6", "curso 7","curso 2", "curso 4"])
});

app.listen(3333);