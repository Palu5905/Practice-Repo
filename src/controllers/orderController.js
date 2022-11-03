const orderREQ=require("../models/orderSchema")

const orderRE =async function(req,res){
    const data =req.body
    const AllOrderData=await orderREQ.create(data)
    res.send({mass:AllOrderData})
}

const orderAPI=async function(req,res){
    const AllOrder=await orderREQ.find().populate('userId').populate('productId')
    res.send({mass:AllOrder})
}


module.exports.orderAPI=orderAPI;
module.exports.orderRE=orderRE
