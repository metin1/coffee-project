
const fs = require('fs');
const path = require('path');

const coffeesDBFile = path.join(process.cwd(), '/db', '/coffees.json');

function getCoffeesData() {
  return JSON.parse(fs.readFileSync(coffeesDBFile, 'utf-8'));
}


function getCoffeeById(coffeeId) {
  const coffeesData = getCoffeesData();
  return coffeesData.find(coffee => coffee.id === +coffeeId)
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
  getCoffeesByCategory,
  getCoffeeCategories
}