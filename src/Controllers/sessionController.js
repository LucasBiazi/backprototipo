//Importando model para a verificação de login
const User = require("../Models/user");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }

    if (!(await user.compareHash(password))) {     
        return res.json({ error: "Senha inválida." });
    }

    const { _id, name } = user;

    return res.json({
      user: { _id, name, email },
      token: User.generateToken(user)
    });
  }
};