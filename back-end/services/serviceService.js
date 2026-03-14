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
  }
};

module.exports = ServiceService;
