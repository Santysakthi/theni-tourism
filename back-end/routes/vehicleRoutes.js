const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/', vehicleController.addVehicle);
router.get('/provider/:providerId', vehicleController.getVehiclesByProvider);
router.get('/:id', vehicleController.getVehicleById);

module.exports = router;
