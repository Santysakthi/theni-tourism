const VehicleModel = require('../models/vehicleModel');

const VehicleService = {
  addVehicle: async (vehicleData) => {
    const { provider_id, vehicle_type, vehicle_number } = vehicleData;
    if (!provider_id || !vehicle_type || !vehicle_number) {
      throw new Error('Provider ID, vehicle type, and vehicle number are required');
    }
    return await VehicleModel.create(vehicleData);
  },

  getVehiclesByProvider: async (providerId) => {
    return await VehicleModel.getByProviderId(providerId);
  },

  getVehicleById: async (id) => {
    const vehicle = await VehicleModel.getById(id);
    if (!vehicle) {
      const error = new Error('Vehicle not found');
      error.statusCode = 404;
      throw error;
    }
    return vehicle;
  }
};

module.exports = VehicleService;
