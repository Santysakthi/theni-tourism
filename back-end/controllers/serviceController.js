const ServiceService = require('../services/serviceService');

const serviceController = {
  createService: async (req, res, next) => {
    try {
      const service = await ServiceService.createService(req.body);
      res.status(201).json({
        success: true,
        data: service
      });
    } catch (error) {
      next(error);
    }
  },

  getServices: async (req, res, next) => {
    try {
      const services = await ServiceService.getAllServices();
      res.status(200).json({
        success: true,
        data: services
      });
    } catch (error) {
      next(error);
    }
  },

  getServiceById: async (req, res, next) => {
    try {
      const service = await ServiceService.getServiceById(req.params.id);
      res.status(200).json({
        success: true,
        data: service
      });
    } catch (error) {
      next(error);
    }
  },

  getServicesByPlace: async (req, res, next) => {
    try {
      const services = await ServiceService.getServicesByPlace(req.params.placeId);
      res.status(200).json({
        success: true,
        data: services
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = serviceController;
