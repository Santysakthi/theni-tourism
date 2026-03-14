const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.createBooking);
router.get('/user/:userId', bookingController.getBookingsByUser);
router.get('/provider/:providerId', bookingController.getBookingsByProvider);
router.patch('/:id/status', bookingController.updateBookingStatus);

module.exports = router;
