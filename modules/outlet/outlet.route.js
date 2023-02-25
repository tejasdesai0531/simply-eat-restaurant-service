const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const validateRequest = require('../../middlewares/validate-request');

const outletController = require('./outlet.controller');

router.get('/', outletController.getOutletList);
router.post('/', outletController.addOutlet);

module.exports = router;