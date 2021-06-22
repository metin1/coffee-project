const { getAllCoffees, getCoffeeById } = require('../utils/coffee-util');

  async function getCoffees (req, res) {
    const coffees = await getAllCoffees();
    if (!coffees) res.status(400).json({ errors: "Coffees Not Found" });
    res.status(200).json(coffees);
  }

  async function getCoffeesById (req, res)  {
    const id = req.params.id;
    const coffees = await getCoffeeById(id);
    if (!coffees)res.status(400).json({ errors: "Coffee not found with this id" });
    res.status(200).json(coffees);
  }

module.exports = {
  getCoffees,
  getCoffeesById
};
