const productREQ =require("../models/productSchema")

const product =async function(req,res){
    const proData =req.body
    const finalData =await productREQ.create(proData)
    res.send({mass:finalData})
}

module.exports.product=product

