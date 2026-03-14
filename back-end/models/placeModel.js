const db = require('../config/db');

const PlaceModel = {
  getAll: async () => {
    return db('places').select('*');
  },

  getBySlug: async (slug) => {
    return db('places').where({ slug }).first();
  },

  create: async (placeData) => {
    const [place] = await db('places').insert(placeData).returning('*');
    return place;
  }
};

module.exports = PlaceModel;
