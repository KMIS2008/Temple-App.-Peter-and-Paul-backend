const express = require ("express");
const visitsRouter = express.Router();

const ctrl = require("../controllers/visitsControllers");

visitsRouter.get("/", ctrl.getVisits);

module.exports = visitsRouter;
