const {
  getAllCoffees,
  getCoffeeById,
  putCoffeeById,
  postNewCoffee,
  deleteCoffeeById
} = require('../utils/coffee-util');

async function getCoffees (req, res) {
  const coffees = await getAllCoffees();
  // If no coffee records
  if (!coffees)
    return res.status(400).json({ error: "Coffees Not Found" });

  res.status(200).json(coffees);
}


async function getCoffeesById (req, res)  {
  const id = req.params.id;
  const coffees = await getCoffeeById(id);
  // if no coffee record found by requested id
  if (coffees === undefined)
    return res.status(404).json({ error: "Not Found" });

  res.status(200).json(coffees);
}


async function updateCoffeeById (req, res)  {
  const id = req.params.id;
  // if no body data return invalid input
  if (!req.body)
    return res.status(400).json({ error: "Invalid Input" });

  const result = await putCoffeeById(id, req.body);
  // if there no record with id return not found
  if (result === "Not Found")
    return res.status(404).json({ error: "Not Found" });

  res.status(200).json(result);
}


async function createCoffeeRecord(req, res) {
  // if no body data return invalid input
  if (!req.body)
    return res.status(400).json({ error: "Invalid Input" });
  const result = await postNewCoffee(req.body);

  res.status(201).json(result);
}


async function deleteCoffeeRecord(req, res) {
  const id = req.params.id;
  if (!id)
    return res.status(404).json({ error: "Not Found" });

  const result = await deleteCoffeeById(id);
  // if there no record with id return not found
  if (result === "Not Found")
    return res.status(404).json({ error: "Not Found" });

  res.status(204).json({});
}


module.exports = {
  getCoffees,
  getCoffeesById,
  updateCoffeeById,
  createCoffeeRecord,
  deleteCoffeeRecord,
};
