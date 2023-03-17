const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {validateRequest} = require('@simply-eat/common');
const {categoryValidator,itemValidator} = require('./catalogue.validator');

const catalogueController = require('./catalogue.controller');


router.post('/category',categoryValidator,validateRequest,catalogueController.addCategory);
router.post('/item',itemValidator,validateRequest,catalogueController.addItem);

module.exports = router;