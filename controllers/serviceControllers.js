const Service = require('../model/services.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

// const HttpError = require('../helpers/HttpError.js');

const addService = async(req, res, next)=>{
  
    const newService = await Service.create(req.body);
   
    res.status(201).json(newService);
}

module.exports = {
    addService: ctrlWrapper(addService),
}