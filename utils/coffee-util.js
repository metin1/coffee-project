
const fs = require('fs');
const { date } = require('joi');
const path = require('path');

const coffeesDBFile = path.join(process.cwd(), '/db', '/coffees.json');

function getCoffeesData() {
  return JSON.parse(fs.readFileSync(coffeesDBFile, 'utf-8'));
}


function getCoffeeById(coffeeId) {
  const coffeesData = getCoffeesData();
  // if no record return undefined
  return coffeesData.find(coffee => coffee.id === +coffeeId)
}


function getAllCoffees() {
  return getCoffeesData()
}


function putCoffeeById(coffeeId, data) {
  const coffeesData = getCoffeesData();

  // check coffee id exist at the file
  const coffeeIndex = coffeesData.findIndex(coffee => coffee.id.toString() === coffeeId)
  if (coffeeIndex === -1) {
    // if no id return not found
    return "Not Found"
  }

  // update record with its own id and updatedTime fields
  const newCoffeeFile = coffeesData.map(
    coffee => coffee.id.toString() === coffeeId ?
    {
      ...coffee,
        ...data,
      id:parseInt(coffeeId),
      updatedTime: new Date(),
    }
      : coffee)

  // write new data to file
  fs.writeFileSync(coffeesDBFile, JSON.stringify(newCoffeeFile), 'utf8')
  return newCoffeeFile[coffeeIndex]
}


function postNewCoffee(data) {
  const coffeesData = getCoffeesData();

  // find last id number to create new record
  let max = 0
  for (let i = 0; i < coffeesData.length; i++) {
    const element = coffeesData[i];
    if (parseInt(element.id)> max) max = parseInt(element.id)
  }

  // insert new record with new id
  const newRecord = {...data, createdTime: new Date(), id: max+1 }
  const newCoffeeFile = coffeesData.concat(newRecord)

  // write new data to file
  fs.writeFileSync(coffeesDBFile, JSON.stringify(newCoffeeFile), 'utf8')
  return newRecord
}


function deleteCoffeeById(coffeeId) {
  const coffeesData = getCoffeesData();

  // check coffee id exist at the file
  const coffeeIndex = coffeesData.findIndex(coffee => coffee.id.toString() === coffeeId)
  if (coffeeIndex === -1) {
    // if no id return not found
    return "Not Found"
  }
  // remove record from coffee data
  const newCoffeeFile = coffeesData.filter(coffee => coffee.id.toString() !== coffeeId)
  // write new data to file
  fs.writeFileSync(coffeesDBFile, JSON.stringify(newCoffeeFile), 'utf8')
  return
}


function getCoffeesByCategory(category) {
  const allCoffees = getAllCoffees();
  const coffeesByCategory = allCoffees.filter(coffee => coffee.category === category);
  return coffeesByCategory;
}


function getCoffeeCategories() {
  const allCoffees = getAllCoffees();
  // get coffee categories
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
  getCoffeeCategories,
  deleteCoffeeById
}