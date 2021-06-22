const Joi = require("joi");

module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const schema = Joi.object()
        .keys({
          title: Joi.string().required(),
          description: Joi.string(),
          category: Joi.string().required(),
          ingredients: Joi.array(),
        })
        .required()

      const validation = schema.validate(req.body)
      if (!validation.error) {
        req.body = validation.value;
      } else {
        req.body = null
      }
      next()
    };
  },
};
