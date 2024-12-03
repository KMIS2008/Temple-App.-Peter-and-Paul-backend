const express = require ("express");
const reviewsRouter = express.Router();
const ctrl = require('../controllers/rewiesControllers');

reviewsRouter.get("/", ctrl.getReviews);

module.exports = reviewsRouter;