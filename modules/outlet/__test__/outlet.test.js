const request = require("supertest");
const app = require("../../../app");
const cityModel = require("../../../models/city.model");
const countryModel = require("../../../models/country.model");

it("it can create outlet", async () => {
  // create country 
  const country = await countryModel.addCountry({name:"India",code:"IND",status:true});
  
  const city = await cityModel.addCity({name:"Mumbai",code:"MUM",status:true,countryId:country.id});
  
  // create city

  

  
  
  await request(app)
  .post("/api/outlet")
  .send({
    name: "indian food",
    address: "404 mumbai house",
    countryID: country.id,
    contact: "mumbai404@gmail.com",
    cityID: city.id,
      status: true,
    });


  const response = await request(app).get("/api/outlet").send();

  console.log(response.body.data);

  expect(response.body.data.outletList.length).toEqual(1);
  expect(response.body.data.outletList[0].name).toEqual("indian food");

});
