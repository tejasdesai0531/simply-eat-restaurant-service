const {BadRequestError} = require('@simply-eat/common')
const OutletModel = require('../../models/outlet.model')
const countryModel = require('../../models/country.model');
const OutletCreatedPublisher = require('../../events/publishers/outlet-created-publisher')
const natsWrapper = require('../../config/nats-wrapper')

async function addOutlet(req, res, next) {

    try {
        const name = req.body.name
        const address = req.body.address
        const countryID = req.body.countryID
        const cityID = req.body.cityID 
        const contact = req.body.contact 
        const status = req.body.status
    
        const countryExits = await countryModel.findOne({id:countryID});

        const outlet = await OutletModel.addOutlet({ name,address,countryID,cityID,contact,status });

        
        // new OutletCreatedPublisher(natsWrapper.getClient()).publish(outlet);

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