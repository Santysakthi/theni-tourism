const db = require('../config/db');

const VehicleModel = {
  create: async (vehicleData) => {
    const [vehicle] = await db('vehicles').insert(vehicleData).returning('*');
    return vehicle;
  },

  getByProviderId: async (providerId) => {
    return db('vehicles').where({ provider_id: providerId });
  },

  getById: async (id) => {
    return db('vehicles').where({ id }).first();
  }
};

module.exports = VehicleModel;
