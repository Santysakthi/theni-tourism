const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/', serviceController.createService);
router.get('/', serviceController.getServices);
router.get('/:id', serviceController.getServiceById);
router.get('/place/id/:placeId', serviceController.getServicesByPlace);
router.get('/place/:slug', serviceController.getServicesByPlaceSlug);

module.exports = router;
