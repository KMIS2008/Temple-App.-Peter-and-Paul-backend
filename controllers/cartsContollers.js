const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Cart = require('../model/carts.js');
const Order = require('../model/orders.js');


const getCarts = async (req, res, next) => {
    const {_id: owner} =req.user;

    const allCarts = await Cart.find({ owner });
    
    res.status(200).json(allCarts);  
};  

const addCarts = async(req, res, next)=>{
    const {_id: owner}=req.user;
    const newContact = await Cart.create({...req.body, 
        owner
    });
   
    res.status(201).json(newContact);
}

const deleteCart = async (req, res) => {
    const {_id} = req.user;
    const {id} = req.params;
    const delCart = await Cart.findOneAndDelete({
        _id: id,
        owner: _id
    });
   
    if (!delCart){
        throw HttpError(404)
    } 
    res.status(200).json(delCart);
};

const updateCartQuantity = async (req, res) => {
    try {

        const { _id, quantity } = req.body;

        if (!_id || quantity === undefined) {
            return res.status(400).json({ message: "Missing required fields: _id or quantity" });
        }

        const updatedCart = await Cart.findOneAndUpdate(
            { _id },
            { quantity },
            { new: true }
        );

        if (!updatedCart) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addFinishCarts = async(req, res, next)=>{
    const {_id: owner}=req.user;
    const newContact = await Order.create({...req.body, 
        owner
    });
   
    res.status(201).json(newContact);
}

module.exports = {
    getCarts: ctrlWrapper(getCarts),
    addCarts:ctrlWrapper(addCarts),
    deleteCart:ctrlWrapper(deleteCart),
    updateCartQuantity:ctrlWrapper(updateCartQuantity),
    addFinishCarts:ctrlWrapper(addFinishCarts)
}