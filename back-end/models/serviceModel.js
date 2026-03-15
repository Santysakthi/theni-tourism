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
  },

  getByPlaceSlug: async (slug) => {
    return db('services')
      .join('providers', 'services.provider_id', 'providers.id')
      .join('users', 'providers.user_id', 'users.id')
      .join('package_places', 'services.id', 'package_places.service_id')
      .join('places', 'package_places.place_id', 'places.id')
      .where('places.slug', slug)
      .select(
        'services.id',
        'services.title',
        'services.description',
        'services.vehicle_type',
        'services.price',
        'services.duration_days',
        'providers.company_name',
        'users.phone'
      );
  }
};

module.exports = ServiceModel;
