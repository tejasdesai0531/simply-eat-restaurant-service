const express = require('express');
const router = express.Router();

const outletRouter = require('./outlet/outlet.route');
const catalogueRouter = require('./catalogue/catalogue.route');


router.use('/outlet', outletRouter);
router.use('/catalogue', catalogueRouter);


module.exports = router;