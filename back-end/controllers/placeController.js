const PlaceService = require('../services/placeService');

const placeController = {
  getPlaces: async (req, res, next) => {
    try {
      const places = await PlaceService.getAllPlaces();
      res.status(200).json({
        success: true,
        data: places
      });
    } catch (error) {
      next(error);
    }
  },

  getPlaceBySlug: async (req, res, next) => {
    try {
      const place = await PlaceService.getPlaceBySlug(req.params.slug);
      res.status(200).json({
        success: true,
        data: place
      });
    } catch (error) {
      next(error);
    }
  },

  createPlace: async (req, res, next) => {
    try {
      const place = await PlaceService.createPlace(req.body);
      res.status(201).json({
        success: true,
        data: place
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = placeController;
