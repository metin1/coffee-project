const express = require("express");
const router = express.Router();
const {
  getCoffeesByCategoryName
} = require("../../controllers/categoryController");

router.get("/:category", getCoffeesByCategoryName);

module.exports = router;