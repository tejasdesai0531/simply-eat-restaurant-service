const { body } = require('express-validator');


const outletValidator = [
    body('name').not().isEmpty(),
    body('address').not().isEmpty(),
    body('countryID').not().isEmpty(),
    body('cityID').not().isEmpty(),
    body('contact').not().isEmpty(),
    body('status').isBoolean()
]


module.exports = {
    outletValidator
}