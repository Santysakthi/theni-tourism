const VehicleService = require('../services/vehicleService');

const vehicleController = {
  addVehicle: async (req, res, next) => {
    try {
      const vehicle = await VehicleService.addVehicle(req.body);
      res.status(201).json({
        success: true,
        data: vehicle
      });
    } catch (error) {
      next(error);
    }
  },

  getVehiclesByProvider: async (req, res, next) => {
    try {
      const vehicles = await VehicleService.getVehiclesByProvider(req.params.providerId);
      res.status(200).json({
        success: true,
        data: vehicles
      });
    } catch (error) {
      next(error);
    }
  },

  getVehicleById: async (req, res, next) => {
    try {
      const vehicle = await VehicleService.getVehicleById(req.params.id);
      res.status(200).json({
        success: true,
        data: vehicle
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = vehicleController;
