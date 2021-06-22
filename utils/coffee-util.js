
const fs = require('fs');
const { date } = require('joi');
const path = require('path');

const coffeesDBFile = path.join(process.cwd(), '/db', '/coffees.json');

function getCoffeesData() {
  return JSON.parse(fs.readFileSync(coffeesDBFile, 'utf-8'));
}


function getCoffeeById(coffeeId) {
  const coffeesData = getCoffeesData();
  return coffeesData.find(coffee => coffee.id === +coffeeId)
}

function putCoffeeById(coffeeId, data) {
  const coffeesData = getCoffeesData();
  const coffeeIndex = coffeesData.findIndex(coffee => coffee.id.toString() === coffeeId)
  if (coffeeIndex === -1) {
    return "Not Found"
  }
  const newCoffeeFile = coffeesData.map(
    coffee => coffee.id.toString() === coffeeId ?
    {
      ...coffee,
      ...data,
        updatedTime: new Date(),
    }
    : coffee)
  fs.writeFileSync(coffeesDBFile, JSON.stringify(newCoffeeFile), 'utf8')
  return newCoffeeFile[coffeeIndex]
}

function postNewCoffee(data) {
  const coffeesData = getCoffeesData();
  let max = 0
  for (let i = 0; i < coffeesData.length; i++) {
    const element = coffeesData[i];
    if (parseInt(element.id)> max) max = parseInt(element.id)
  }
  const newRecord = {...data, createdTime: new Date(), id: max+1 }
  const newCoffeeFile = coffeesData.concat(newRecord)
  fs.writeFileSync(coffeesDBFile, JSON.stringify(newCoffeeFile), 'utf8')
  return newRecord
}

function getAllCoffees() {
  return getCoffeesData()
}

function getCoffeesByCategory(category) {
  const allCoffees = getAllCoffees();
  const coffeesByCategory = allCoffees.filter(coffee => coffee.category === category);
  return coffeesByCategory;
}

function getCoffeeCategories() {
  const allCoffees = getAllCoffees();
  var coffeeCategories = [];
  for (var i = 0, l = allCoffees.length; i < l; i++) {
    const category = allCoffees[i].category
    if (!coffeeCategories.some(cat => cat === category)) coffeeCategories.push(allCoffees[i].category);
  }
  return coffeeCategories;
}

module.exports = {
  getCoffeesData,
  getCoffeeById,
  getAllCoffees,
  putCoffeeById,
  postNewCoffee,
  getCoffeesByCategory,
  getCoffeeCategories
}