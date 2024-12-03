const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const StoresNearest = require('../model/stores.js');
const Stores = require('../model/pharmacies.js');

const getStoresNearest = async (req, res, next) => {

    const allStoresNearest = await StoresNearest.find();
    
    res.status(200).json(allStoresNearest);  
};  

const getStores = async (req, res, next) => {

    const allStores = await Stores.find();
    
    res.status(200).json(allStores);  
};  


module.exports = {
    getStoresNearest: ctrlWrapper(getStoresNearest),
    getStores: ctrlWrapper(getStores),
}