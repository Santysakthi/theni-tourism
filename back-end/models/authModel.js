const db = require('../config/db');

const AuthModel = {
  createUser: async (userData) => {
    const [user] = await db('users').insert(userData).returning('*');
    return user;
  },

  findByPhone: async (phone) => {
    return db('users').where({ phone }).first();
  }
};

module.exports = AuthModel;
