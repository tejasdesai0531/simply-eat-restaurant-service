const request = require("supertest");
const app = require("../../../app");

it("it can create outlet", async () => {
  await request(app)
    .post("/api/outlet")
    .send({
      name: "indian food",
      address: "404 mumbai house",
      countryCode: "IND",
      cityCode: "MUM",
      contact: "mumbai404@gmail.com",
      status: true,
    });

  const response = await request(app).get("/api/outlet").send();

  console.log(response.body.data);

  expect(response.body.data.outletList.length).toEqual(1);
  expect(response.body.data.outletList[0].name).toEqual("indian food");
});
