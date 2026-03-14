const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

router.get('/', placeController.getPlaces);
router.get('/:slug', placeController.getPlaceBySlug);
router.post('/', placeController.createPlace);

module.exports = router;
