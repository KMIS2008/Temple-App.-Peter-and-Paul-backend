const Product = require('../model/poducts.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const HttpError = require('../helpers/HttpError.js');


const getAllProducts = async (req, res, next) => {
    const { page = 1, limit = 12, keyword, category } = req.query; 
    const skip = (page - 1) * limit; 
    let query = {};

    if (keyword) {
        query.name = { $regex: keyword, $options: 'i' }; 
    }

    if (category) {
        query.category = category; 
    }

    const allProducts = await Product.find(query).skip(skip).limit(parseInt(limit));
    const totalProducts = await Product.countDocuments(query);
    
    if (allProducts.length === 0) {
        return res.status(200).json({ 
            message: 'Nothing was found for your request',
            products: [],
            totalPages: 0,
            currentPage: parseInt(page)
        });
    }
    
    res.status(200).json({ 
        products: allProducts, 
        totalPages: Math.ceil(totalProducts / limit), 
        currentPage: parseInt(page) 
    });
};


const getProductById=async (req, res) => {
    const {id} = req.params;
    const productById =  await Product.findById(id)

    if (!productById){
          throw HttpError(404)
    }
     res.status(200).json(productById);
};


module.exports = {
    getAllProducts: ctrlWrapper(getAllProducts),
    getProductById:ctrlWrapper(getProductById),
}