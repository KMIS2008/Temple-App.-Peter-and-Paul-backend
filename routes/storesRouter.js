const express = require ("express");
const storenearestRouter = express.Router();
const ctrl = require('../controllers/storesControllers');


storenearestRouter.get("/nearest", ctrl.getStoresNearest);
storenearestRouter.get("/", ctrl.getStores);

module.exports = storenearestRouter;