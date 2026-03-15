const ServiceModel = require('../models/serviceModel');

const ServiceService = {
  createService: async (serviceData) => {
    const { provider_id, title, price } = serviceData;
    if (!provider_id || !title || !price) {
      throw new Error('Provider ID, title, and price are required');
    }
    return await ServiceModel.create(serviceData);
  },

  getAllServices: async () => {
    return await ServiceModel.getAll();
  },

  getServiceById: async (id) => {
    const service = await ServiceModel.getById(id);
    if (!service) {
      const error = new Error('Service not found');
      error.statusCode = 404;
      throw error;
    }
    return service;
  },

  getServicesByPlace: async (placeId) => {
    return await ServiceModel.getByPlaceId(placeId);
  },

  getServicesByPlaceSlug: async (slug) => {
    const services = await ServiceModel.getByPlaceSlug(slug);
    return services.map(s => ({
      id: s.id,
      title: s.title,
      description: s.description,
      vehicle_type: s.vehicle_type,
      price: s.price,
      duration_days: s.duration_days,
      provider: {
        company_name: s.company_name,
        phone: s.phone
      }
    }));
  }
};

module.exports = ServiceService;
