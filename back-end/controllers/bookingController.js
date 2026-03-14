const BookingService = require('../services/bookingService');

const bookingController = {
  createBooking: async (req, res, next) => {
    try {
      const booking = await BookingService.createBooking(req.body);
      res.status(201).json({
        success: true,
        data: booking
      });
    } catch (error) {
      next(error);
    }
  },

  getBookingsByUser: async (req, res, next) => {
    try {
      const bookings = await BookingService.getBookingsByUser(req.params.userId);
      res.status(200).json({
        success: true,
        data: bookings
      });
    } catch (error) {
      next(error);
    }
  },

  getBookingsByProvider: async (req, res, next) => {
    try {
      const bookings = await BookingService.getBookingsByProvider(req.params.providerId);
      res.status(200).json({
        success: true,
        data: bookings
      });
    } catch (error) {
      next(error);
    }
  },

  updateBookingStatus: async (req, res, next) => {
    try {
      const { status } = req.body;
      const booking = await BookingService.updateBookingStatus(req.params.id, status);
      res.status(200).json({
        success: true,
        data: booking
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = bookingController;
