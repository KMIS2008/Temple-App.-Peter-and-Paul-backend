const express = require ("express");
const ctrl= require('../controllers/serviceControllers.js');
const schema = require ('../schemas/serviceSchema.js');
const validateBody = require ('../helpers/validateBody.js');
const isValidId = require('../middlewares/isValidId');


const serviceRouter=express.Router();

// serviceRouter.get("/", ctrl.addService);

serviceRouter.post("/", validateBody(schema.serviceSchema), ctrl.addService);

// cartRouter.delete("/:id", authdentificate, isValidId, ctrl.deleteCart);

module.exports = serviceRouter;