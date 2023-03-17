const {BadRequestError} = require('@simply-eat/common')
const CatalogueModel = require('../../models/catalogue.model');
const natsWrapper = require('../../config/nats-wrapper')

async function addCategory(req, res, next) {

    try {

        const name = req.body.name;
        const outletID = req.body.outletID;

        let catalogue =   await CatalogueModel.findOne({outletID});

        if(!catalogue){
            throw new BadRequestError('Invalid Outlet ID'); 
        }

        let category = {
            name
        }

        catalogue.categories.push(category);
       let resultCatalogue = await catalogue.save();

        res.send({
            error: false,
            message: "Category created successfully",
            data: {
                resultCatalogue
            }
        })
    } catch (error) {
        next(error)
    }
}

async function addItem(req, res, next) {

    try {

        const name = req.body.name;
        const price = req.body.price;
        const imgUrl = req.body.imgUrl;
        const description = req.body.description;
        const visibility = req.body.visibility;
        const categoryID = req.body.categoryID;
        const outletID = req.body.outletID;

        let catalogue =   await CatalogueModel.findOne({outletID});
        
        if(!catalogue){
            throw new BadRequestError('Invalid Outlet ID'); 
        }


        let category = catalogue.categories.find(c=>c.id == categoryID);
        if(!category){
            throw new BadRequestError('Invalid category ID'); 
        }

        let item = {
            name,price,description,imgUrl,visibility
        }

        category.items.push(item);
       let resultCatalogue = await catalogue.save();

        res.send({
            error: false,
            message: "Item created successfully",
            data: {
                resultCatalogue
            }
        })
    } catch (error) {
        next(error)
    }
}



module.exports = {
    addCategory,
    addItem
}