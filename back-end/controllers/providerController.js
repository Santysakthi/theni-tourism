const ProviderService = require('../services/providerService');

const providerController = {
  registerProvider: async (req, res, next) => {
    try {
      const provider = await ProviderService.registerProvider(req.body);
      res.status(201).json({
        success: true,
        data: provider
      });
    } catch (error) {
      next(error);
    }
  },

  getProviders: async (req, res, next) => {
    try {
      const providers = await ProviderService.getAllProviders();
      res.status(200).json({
        success: true,
        data: providers
      });
    } catch (error) {
      next(error);
    }
  },

  getProviderById: async (req, res, next) => {
    try {
      const provider = await ProviderService.getProviderById(req.params.id);
      res.status(200).json({
        success: true,
        data: provider
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = providerController;
