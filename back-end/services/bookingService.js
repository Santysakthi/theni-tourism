const BookingModel = require('../models/bookingModel');

const BookingService = {
  createBooking: async (bookingData) => {
    const { user_id, service_id, provider_id, travel_date } = bookingData;
    if (!user_id || !service_id || !provider_id || !travel_date) {
      throw new Error('User ID, service ID, provider ID, and travel date are required');
    }
    return await BookingModel.create(bookingData);
  },

  getBookingsByUser: async (userId) => {
    return await BookingModel.getByUserId(userId);
  },

  getBookingsByProvider: async (providerId) => {
    return await BookingModel.getByProviderId(providerId);
  },

  updateBookingStatus: async (id, status) => {
    const booking = await BookingModel.updateStatus(id, status);
    if (!booking) {
      const error = new Error('Booking not found');
      error.statusCode = 404;
      throw error;
    }
    return booking;
  }
};

module.exports = BookingService;
