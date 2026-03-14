const db = require('../config/db');

const BookingModel = {
  create: async (bookingData) => {
    const [booking] = await db('bookings').insert(bookingData).returning('*');
    return booking;
  },

  getByUserId: async (userId) => {
    return db('bookings').where({ user_id: userId });
  },

  getByProviderId: async (providerId) => {
    return db('bookings').where({ provider_id: providerId });
  },

  updateStatus: async (id, status) => {
    const [booking] = await db('bookings')
      .where({ id })
      .update({ status })
      .returning('*');
    return booking;
  }
};

module.exports = BookingModel;
