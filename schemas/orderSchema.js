const Joi = require('joi');

 const createOrderSchema = Joi.object({

    _id: Joi.string().required(), 
    photo: Joi.string().required(), 
    name: Joi.string().required(), 
    price: Joi.string().required(),
    suppliers: Joi.string().required(),
    stock: Joi.string(),
    category: Joi.string(),
    discription: Joi.object(),
    reviews: Joi.array(),
    quantity: Joi.number(),
})

 const updateOrderSchema = Joi.object({
    _id: Joi.string().required(), 
    quantity: Joi.number(),
})

const orderSchema = Joi.object({
    _id: Joi.string().required(),
    photo: Joi.string().uri().required(),
    name: Joi.string(), 
    price: Joi.number().required(),
     suppliers: Joi.string(),
    stock: Joi.string(),
    category: Joi.string(),
    discription: Joi.object(),
    reviews: Joi.array(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso(),
    quantity: Joi.number().required(),
}).unknown();


const shippingInfoSchema = Joi.object({
    _id:Joi.string().required(),
    namecustomer: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    address: Joi.string().required(),
    paymentMethod: Joi.string().valid('Cash On Delivery', 'Bank').required(),
    orders: Joi.array().items(orderSchema).required(),
});


module.exports= {createOrderSchema, updateOrderSchema, shippingInfoSchema}