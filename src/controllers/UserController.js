const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { filename } = req.file || 'vazio'
    const {
      name, email, cpf, password,
    } = req.body;

    let user = await User.findOne({ email });

    try {
      if (!user) {
        user = await User.create({
          name,
          email,
          cpf,
          password,
          created: Date(),
          avatar_url: filename,
        });

        res.json(user);
      } else {
        throw 'User Already Exists';
      }
    } catch (err) {
      res.status(409).json({ message: 'Erro. Usuário já existente' });
    }
  },

  async index(req, res) {
    const users = await User.find();

    if (!users) {
      return 'No user found';
    }
    res.send(users);
  },

  async destroy(req, res) {
    const { _id } = req.query;

    let user = await User.findOne({ _id });

    try {
      if (user) {
        user = await User.deleteOne({ _id });

        res.json(user);
      } else {
        throw 'User not found';
      }
    } catch (err) {
      res.status(409).json({ message: 'Erro. Usuário não localizado para exclusão' });
    }
  },

  async update(req, res) {
    const {
      name, email, password, balance,
    } = req.body;

    const { _id } = req.query;

    const user = await User.findOne({ _id });

    try {
      if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;
        user.balance = balance || user.balance;
        user.updated = Date();

        user.save();

        res.json(user);
      } else {
        throw 'User not found';
      }
    } catch (err) {
      res.status(409).json({message: 'Erro. Não foi possível atualizar os dados do usuário.'});
    }
  },
};
