const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError')

const serviceSchema= new Schema({
   
    type:  {
        type: String,
      },
    fullName:  {
        type: String,
      },
    email:  {
        type: String,
      },
    phone:  {
        type: String,
      },

},{versionKey:false, timestamps:true});

serviceSchema.post('save', handleMongooseError);

const Service = model('service', serviceSchema);

module.exports = Service;