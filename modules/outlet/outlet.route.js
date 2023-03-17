const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {validateRequest} = require('@simply-eat/common');
const {outletValidator} = require('./outlet.validator');

const outletController = require('./outlet.controller');

router.get('/', outletController.getOutletList);
router.post('/',outletValidator,validateRequest,outletController.addOutlet);

module.exports = router;