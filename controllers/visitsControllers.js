const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Visit= require("../model/visits.js");

const getVisits = async (req, res, next) => {

    const allVisits = await Visit.find();
    
    res.status(200).json(allVisits);  
};  


const updateVisits = async (req, res) => {
    try {
        const visit = await Visit.findOne();
        visit.count += 1;
        await visit.save();
        res.json({ count: visit.count });
      } catch (err) {
        res.status(500).json({ error: "Помилка сервера" });
      }
};



module.exports = {
    getVisits: ctrlWrapper(getVisits),
    updateVisits: ctrlWrapper(updateVisits)
}