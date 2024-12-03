const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Reviews = require('../model/reviews.js');

const getReviews = async (req, res, next) => {

    const allReviews = await Reviews.find();
    
    res.status(200).json(allReviews);  
};  


module.exports = {
    getReviews: ctrlWrapper(getReviews),
}