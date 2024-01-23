const Joi = require('joi');

const patientSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().min(10).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().min(10).required(),
  password: Joi.string().min(8).max(15).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/).required(),
  photo: Joi.string().required()
});

module.exports = patientSchema;
