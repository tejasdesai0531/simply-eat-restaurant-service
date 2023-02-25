const express = require('express');
const router = express.Router();

const outletRouter = require('./outlet/outlet.route');


router.use('/outlet', outletRouter);


module.exports = router;