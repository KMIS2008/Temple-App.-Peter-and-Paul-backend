const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError')

const storesNearestSchema= new Schema({
   
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

storesNearestSchema.post('save', handleMongooseError);

const StoresNearest = model('nearest', storesNearestSchema);

module.exports = StoresNearest;