const { body } = require('express-validator');


const categoryValidator = [
    body('name').not().isEmpty(),
    body('outletID').not().isEmpty()   
]

const itemValidator = [
    body('name').not().isEmpty(),
    body('price').not().isEmpty(),
    body('imgUrl').not().isEmpty(),
    body('description').not().isEmpty(),
    body('visibility').not().isEmpty(),
    body('categoryID').not().isEmpty(),
    body('outletID').not().isEmpty(),

]

module.exports = {
    categoryValidator,
    itemValidator
}