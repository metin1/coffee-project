const { getAllCoffees, getCoffeeById, putCoffeeById } = require('../utils/coffee-util');

  async function getCoffees (req, res) {
    const coffees = await getAllCoffees();
    if (!coffees) res.status(400).json({ errors: "Coffees Not Found" });
    res.status(200).json(coffees);
  }

  async function getCoffeesById (req, res)  {
    const id = req.params.id;
    const coffees = await getCoffeeById(id);
    console.log(`LL: getCoffeesById -> coffees`, coffees)
    if (coffees)res.status(400).json({ errors: "Coffee not found with this id" });
    if (!coffees)res.status(400).json({ errors: "Coffee not found with this id" });
    res.status(200).json(coffees);
  }

  async function putCoffeesById (req, res)  {
    const id = req.params.id;

    if (!req.body) res.status(400).json({ errors: "There is no data at the request" });

    const coffees = await putCoffeeById(id, req.body);
    if (!req.body)res.status(400).json({ errors: "Coffee not found with this id" });
    res.status(200).json(coffees);
  }

module.exports = {
  getCoffees,
  getCoffeesById
};
