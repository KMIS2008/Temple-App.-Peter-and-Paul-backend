const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError')

const storesSchema= new Schema({
   
    name:  {
        type: String,
      },
    address:  {
        type: String,
      },
    city:  {
        type: String,
      },
    phone:  {
        type: String,
      },
    rating:  {
        type: Number,
      },

},{versionKey:false, timestamps:true});

storesSchema.post('save', handleMongooseError);

const Stores = model('pharmacy', storesSchema);

module.exports = Stores;