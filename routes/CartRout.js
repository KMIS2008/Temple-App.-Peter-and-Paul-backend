const express = require ("express");
const ctrl= require('../controllers/cartsContollers');
const schema = require ('../schemas/orderSchema.js');
const validateBody = require ('../helpers/validateBody.js');
const isValidId = require('../middlewares/isValidId');
const authdentificate = require('../middlewares/authdentificate.js');

const cartRouter=express.Router();

cartRouter.get("/", authdentificate, ctrl.getCarts);

cartRouter.post("/", authdentificate, validateBody(schema.createOrderSchema), ctrl.addCarts);

cartRouter.delete("/:id", authdentificate, isValidId, ctrl.deleteCart);

cartRouter.put("/update", authdentificate, validateBody(schema.updateOrderSchema), ctrl.updateCartQuantity);

cartRouter.post("/checkout",authdentificate, validateBody(schema.shippingInfoSchema), ctrl.addFinishCarts);


module.exports = cartRouter;