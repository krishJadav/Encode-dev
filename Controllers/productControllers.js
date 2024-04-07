// const {default: Mongoose} = require("mongoose")
const Mongoose = require('mongoose')
const Product = require('../Models/productModels');

const getAllProducts = async(req,res) => {
    const product = await Product.find({}).sort({createdAt: -1})

    res.status(200).json(product)
}

const   getProduct = async(req,res) => {
    const {id} = req.params

    if(!Mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Not a valid DB Id."})
    }
    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error: "Product Not Found."})
    }

    res.status(200).json(product)
}

const addProduct = async(req,res) => {
    const{Name, Description, Quantity, BuyingPrice, MRP, Category } = req.body;

    try{
        const product = await Product.create({Name, Description, Quantity, BuyingPrice, MRP, Category })
        res.status(201).json(product);
    }catch(error) {
        res.status(500).json({error: error.message})
    }
}

const updateProduct = async(req,res) => {
    const{id} = req.params

    if (!Mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(400).json({error: 'Invalid ID.'});
    }

    const Product = await Product.findByIdAndUpdate({_id:id},req.body,{
        runValidaters: true,
        new: true,
    })
    if(!product){
        return res.status(404).json({error: "Product not found."})
    }

    res.status(201).json(product)
}

const deleteProduct = async(req,res) => {
    const{id} = req.params

    if(!Mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send('Invalid Id')
    }

    const product = await Product.findByIdAndDelete({_id:id})

    if(!product){
        return res.status(404).json({error: "Product do not exist."})
    }

    res.status(200).json(product)
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
}