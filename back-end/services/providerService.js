const ProviderModel = require('../models/providerModel');

const ProviderService = {
  registerProvider: async (providerData) => {
    const { user_id, company_name } = providerData;
    if (!user_id || !company_name) {
      throw new Error('User ID and company name are required');
    }
    return await ProviderModel.create(providerData);
  },

  getAllProviders: async () => {
    return await ProviderModel.getAll();
  },

  getProviderById: async (id) => {
    const provider = await ProviderModel.getById(id);
    if (!provider) {
      const error = new Error('Provider not found');
      error.statusCode = 404;
      throw error;
    }
    return provider;
  }
};

module.exports = ProviderService;
