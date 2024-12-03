const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');


const cartsSchema= new Schema({
    _id: { type: String},

    photo:  {
        type: String,
      },
    name:  {
        type: String,
      },
    price:  {
        type: String,
      },
    suppliers:  {
        type: String,
      },
    stock:  {
        type: String,
      },
    category: {type: String,},

    quantity: {type: Number,},

    namecustomer: {type: String,},

    address:{type: String,},

    phone:{type: String,},

    email:{type: String,},

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }

},{versionKey:false, timestamps:true});

cartsSchema.post('save', handleMongooseError);

const Cart = model('cart', cartsSchema);

module.exports = Cart;