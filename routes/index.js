

const categories = require("../routes/api/categories");
const category = require("../routes/api/category");
const coffee = require("../routes/api/coffee");

module.exports = app => {
  app.use("/api/categories", categories);
  app.use("/api/category", category);
  app.use("/api/coffee", coffee);
}