const PlaceModel = require('../models/placeModel');

const PlaceService = {
  getAllPlaces: async () => {
    return await PlaceModel.getAll();
  },

  getPlaceBySlug: async (slug) => {
    const place = await PlaceModel.getBySlug(slug);
    if (!place) {
      const error = new Error('Place not found');
      error.statusCode = 404;
      throw error;
    }
    return place;
  },

  createPlace: async (placeData) => {
    const { name, slug } = placeData;
    if (!name || !slug) {
      throw new Error('Name and slug are required');
    }
    return await PlaceModel.create(placeData);
  }
};

module.exports = PlaceService;
