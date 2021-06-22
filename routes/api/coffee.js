const express = require("express");
const router = express.Router();
const {
  getCoffees,
  getCoffeesById,
  updateCoffeeById,
  createCoffeeRecord
} = require("../../controllers/coffeeController");
const { validateBody } = require("../../middleware/validator");

router.get("/all", getCoffees);
router.get("/:id", getCoffeesById);
router.put("/:id", validateBody(), updateCoffeeById);
router.post("/", validateBody(), createCoffeeRecord);

module.exports = router;