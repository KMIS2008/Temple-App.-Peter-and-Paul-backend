const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Visit= require("../model/visits.js");

const getVisits = async (req, res, next) => {

    const allVisits = await Visit.find();
    
    res.status(200).json(allVisits);  
};  

module.exports = {
    getVisits: ctrlWrapper(getVisits),
}