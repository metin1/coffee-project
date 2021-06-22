const app = require('../../server'); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const coffee = require('../../db/coffees.json');
const { describe } = require('yargs');

function getCoffeeCategories() {
    var coffeeCategories = [];
    for (var i = 0, l = coffee.length; i < l; i++) {
      const category = coffee[i].category
      if (!coffeeCategories.some(cat => cat === category)) coffeeCategories.push(coffee[i].category);
    }
    return coffeeCategories;
}


it("should return all coffee array as expected", async () => {
    const response = await request.get("/coffee/all");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(coffee.length);
});

it("should return only one coffee info", async () => {
    const response = await request.get("/coffee/1");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(coffee[0]);
});

it("should return error message for invalid coffee id", async () => {
    const response = await request.get(`/coffee/${coffee.length+1}`);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBe("Coffee not found with this id");
});

it("should return coffees according to category", async () => {
    const response = await request.get("/category/hot");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(coffee.filter(coffee => coffee.category === "hot").length);

    const response2 = await request.get("/category/iced");
    expect(response2.status).toBe(200);
    expect(response2.body.length).toBe(coffee.filter(coffee => coffee.category === "iced").length);
});

it("should return empty array for invalid coffee category", async () => {
    const response = await request.get("/category/qwer");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
});

it("should return all coffee categories array as expected", async () => {
    const response = await request.get("/categories")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(getCoffeeCategories());
})
