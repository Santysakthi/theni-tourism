const db = require('../config/db');

const ServiceModel = {
  create: async (serviceData) => {
    const [service] = await db('services').insert(serviceData).returning('*');
    return service;
  },

  getAll: async () => {
    return db('services').select('*');
  },

  getById: async (id) => {
    return db('services').where({ id }).first();
  },

  getByPlaceId: async (placeId) => {
    return db('services')
      .join('package_places', 'services.id', 'package_places.service_id')
      .where('package_places.place_id', placeId)
      .select('services.*');
  }
};

module.exports = ServiceModel;
