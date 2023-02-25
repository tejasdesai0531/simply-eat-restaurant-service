const BadRequestError = require('../../errors/bad-request-error')
const OutletModel = require('../../models/outlet.model')
const { validationResult } = require('express-validator')
const RequestValidationError = require('../../errors/request-validation-error')
const OutletCreatedPublisher = require('../../events/publishers/outlet-created-publisher')
const natsWrapper = require('../../config/nats-wrapper')


async function addOutlet(req, res, next) {

    try {
        const name = req.body.name
        const address = req.body.address
        const countryCode = req.body.countryCode
        const cityCode = req.body.cityCode 
        const contact = req.body.contact 
        const status = req.body.status
    
        const outlet = await OutletModel.addOutlet({ name,address,countryCode,cityCode,contact,status })
    
        res.send({
            error: false,
            message: "Outlet created successfully",
            data: {
                outlet
            }
        })
    } catch (error) {
        next(error)
    }
}

async function getOutletList(req, res) {

    const outlets = await OutletModel.getOutlets()

    res.send({
        error: false,
        data: {
            outletList: outlets
        }
    })
}

module.exports = {
    addOutlet,
    getOutletList
}