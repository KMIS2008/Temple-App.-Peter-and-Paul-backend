const Joi = require('joi');

 const updateVisitsSchema = Joi.object({
    number: Joi.number().required(),     
})

module.exports= {updateVisitsSchema}