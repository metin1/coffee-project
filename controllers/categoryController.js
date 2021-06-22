const { getCoffeesByCategory, getCoffeeCategories } = require('../utils/coffee-util');


  async function getCategories (req, res) {
    const categories = await getCoffeeCategories();
    if (!categories) res.status(400).json({ errors: "Categories Not Found" });
    res.status(200).json(categories);
  }

  async function getCoffeesByCategoryName (req, res)  {
    const category = req.params.category;
    const coffees = await getCoffeesByCategory(category);
    if (!coffees)res.status(400).json({ errors: "Coffee not found with this category" });
    res.status(200).json(coffees);
  }

module.exports = {
  getCategories,
  getCoffeesByCategoryName
};
