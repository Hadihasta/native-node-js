const pool = require("../db/db");

const UserModel = {
  async findAll() {
    const res = await pool.query("SELECT * FROM users");
    console.log(res)
    // res menggembalikan 2 array 
    // karna itu return array pertama saja 
    return res[0];
  },

  async findById(id) {
    const [res] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return res[0];
  },

  async create({ name, email, password }) {
    const [result] = await pool.query(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      [name, email, password]
    );
    return result.insertId;
  },
};

module.exports = UserModel;
