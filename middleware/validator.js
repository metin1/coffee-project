const Joi = require("joi");

module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const { error, value } = Joi.validate(req.body, schema);

      if (error) {
        return res.status(400).json(error.details[0].message);
      }

      if (!req.value) {
        req.value = {};
      }
      req.value["body"] = value;
      next();
    };
  },

  validateParamCategory: schema => {
    return (req, res, next) => {

      const { error, value } = Joi.validate(req.params.category.toString(), schema);

      if (error) {
        return res.status(400).json(error.details[0].message);
      }

      if (!req.value) {
        req.value = {};
      }
      req.value["params"] = value;
      next();
    };
  },


  schemas: {
    category: Joi.required()
  }
};
