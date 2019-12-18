//Importações para o model do pokemon
const { Schema, model } = require("mongoose");

//Criação do Schema do Pokemon
const PokemonSchema = new Schema(
  //Atributos do pokemon:
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    attack: {
      type: Number,
      required: true
    },
    defense: {
      type: Number,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Usuarios"
    },
  }
);

//Exportação do modelo Post
module.exports = model("Pokemon", PokemonSchema);