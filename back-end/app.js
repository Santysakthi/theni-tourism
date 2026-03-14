require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware - CORS first
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const errorHandler = require('./middleware/errorhandler');

const authRoutes = require('./routes/authRoutes');
const placeRoutes = require('./routes/placeRoutes');
const providerRoutes = require('./routes/providerRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Routes
app.use('/auth', authRoutes);
app.use('/places', placeRoutes);
app.use('/providers', providerRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/services', serviceRoutes);
app.use('/bookings', bookingRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ success: true, message: 'Server is healthy' });
});

// Fallback route
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;
  next(error);
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;