

const categories = require("../routes/api/categories");
const category = require("../routes/api/category");
const coffee = require("../routes/api/coffee");

module.exports = app => {
  app.use("/categories", categories);
  app.use("/category", category);
  app.use("/coffee", coffee);
}