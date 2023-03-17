const request = require("supertest");
const app = require("../../../app");
const cityModel = require("../../../models/city.model");
const countryModel = require("../../../models/country.model");
const outletModel = require("../../../models/outlet.model");
const catalogueModel = require('../../../models/catalogue.model');

it("it can create category", async () => {

  const country = await countryModel.addCountry({name:"India",code:"IND",status:true});
  const city = await cityModel.addCity({name:"Mumbai",code:"MUM",status:true,countryId:country.id});
  const outlet = await outletModel.addOutlet({
    name: "indian food",
    address: "404 mumbai house",
    countryID: country.id,
    contact: "mumbai404@gmail.com",
    cityID: city.id,
    status: true,
  });

  const catalogue = await catalogueModel.create({outletID:outlet.id})
  console.log(catalogue,'catalogue');
 let result= await request(app)
  .post("/api/catalogue/category")
  .send({
    name: "Pizza",
    outletID: outlet.id
   });

 let categoryID = result.body.data.resultCatalogue.categories[0].id;  
console.log(result.body.data.resultCatalogue.categories[0].id,'result',categoryID);

let itemResult= await request(app)
.post("/api/catalogue/item")
.send({
  name: "Pizza item",
  price:500,
  description:"pizaa description",
  imgUrl:"immg",
  outletID: outlet.id,
  visibility:true,
  categoryID:categoryID
 });
// console.log(itemResult.body,'res');
 console.log(itemResult.body.data.resultCatalogue.categories[0].items,'item reuslt');

});
