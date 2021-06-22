const { getAllCoffees, getCoffeeById, putCoffeeById, postNewCoffee } = require('../utils/coffee-util');

async function getCoffees (req, res) {
  const coffees = await getAllCoffees();
  if (!coffees) res.status(400).json({ error: "Coffees Not Found" });
  res.status(200).json(coffees);
}

async function getCoffeesById (req, res)  {
  const id = req.params.id;
  const coffees = await getCoffeeById(id);
  if (coffees=== undefined) return  res.status(404).json({ error: "Not Found"});
  if (!coffees) return  res.status(400).json({ error: "Coffee not found with this id" });
  res.status(200).json(coffees);
}

async function updateCoffeeById (req, res)  {
  const id = req.params.id;
  if (!req.body) res.status(400).json({ error: "Invalid Input" });

  const result = await putCoffeeById(id, req.body);
  if (result === "Not Found")
    return res.status(404).json({ error: "Not Found" });
  res.status(200).json(result);
}

async function createCoffeeRecord(req, res) {
  if (!req.body) res.status(400).json({ error: "Invalid Input" });
  const result = await postNewCoffee(req.body);
  res.status(201).json(result);
}

module.exports = {
  getCoffees,
  getCoffeesById,
  updateCoffeeById,
  createCoffeeRecord
};
