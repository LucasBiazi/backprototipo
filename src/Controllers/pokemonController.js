//Importações para o controller do Pokemon
//Importações para o controller do pokemon!
const Pokemon = require("../Models/pokemon");
const User = require("../Models/user");

module.exports = {

    //GUARDAR
    async store(req, res) {
        const pokemon = await Pokemon.create(req.body);
        await User.updateOne({ _id: pokemon.user }, { $push: { pokemon: pokemon._id } });
        return res.json(pokemon);
    },
    //LISTAR
    async list(req, res) {
        const pokemon = await Pokemon.find().populate('user');
        return res.json(pokemon);
    },
    //EXCLUIR
    async destroy(req, res) {
        await Pokemon.deleteOne({ _id: req.params._id });
        //Mensagem de confirmação (avisa o sucesso da exclusão)
        return res.json({ message: "Exclusão de pokemon realizada com sucesso!" });
    },

}