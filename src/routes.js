//Importações necessária para o GRUDE (user e post)
const express = require("express");
const routes = express.Router();
const UserController = require("./Controllers/userController");
const PokemonController = require("./Controllers/pokemonController");
const SessionController = require("./Controllers/sessionController");

//PARA LOGIN
routes.post('/session', SessionController.store);

//PARA USUÁRIO
//Caminho do cadastro
routes.post("/cadastro", UserController.store);
//Caminho do FIND
routes.get("/buscar/:email", UserController.index);
//Caminho LIST
routes.get("/list", UserController.list);
//Camingo para o delete
routes.delete("/apagar/:email", UserController.destroy);

//PARA POKEMON
//Caminho do cadastro
routes.post("/cadastropk", PokemonController.store);
//Caminho LIST
routes.get("/listpk", PokemonController.list);
//Camingo para o delete
routes.delete("/delpk/:_id", PokemonController.destroy);

//Exportando as rotas
module.exports = routes;