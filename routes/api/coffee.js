const express = require("express");
const router = express.Router();
const {
  getCoffees, getCoffeesById
} = require("../../controllers/coffeeController");

router.get("/all", getCoffees);
router.get("/:id", getCoffeesById);

module.exports = router;