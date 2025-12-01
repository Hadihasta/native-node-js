const UserModel = require("../models/user");

const UserController = {
  async getAll(req, res) {
    const users = await UserModel.findAll();
    res.json(users);
  },

  async createUser(req, res) {
    const { name, email, password } = req.body;
    const id = await UserModel.create({ name, email, password });
    res.json({ message: "User created", id });
  }
};

module.exports = UserController;