const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

router.post('/register', providerController.registerProvider);
router.get('/', providerController.getProviders);
router.get('/:id', providerController.getProviderById);

module.exports = router;
