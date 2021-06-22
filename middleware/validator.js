const Joi = require("joi");




module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const schema = Joi.object()
        .keys({
          id: Joi.string().required(),
          title: Joi.string().required(),
          description: Joi.string(),
          category: Joi.string().required(),
          ingredients: Joi.array(),
        })
        .required()

      const validation = schema.validate(req.body)
      console.log(`LL: validation`, validation)
      req.body = validation?.value;
      next()
    };
  },
};
