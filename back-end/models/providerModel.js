const db = require('../config/db');

const ProviderModel = {
  create: async (providerData) => {
    const [provider] = await db('providers').insert(providerData).returning('*');
    return provider;
  },

  getAll: async () => {
    return db('providers').select('*');
  },

  getById: async (id) => {
    return db('providers').where({ id }).first();
  }
};

module.exports = ProviderModel;
