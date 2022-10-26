const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

////////=====================================================================================

const createBook =async function(req,res){
    let data = req.body
    let listBook = await userModel.create(data)
    res.send({mass:listBook})
}

const bookAuthor =async function(req,res){
    let result =await userModel.find().select({bookName:1,authorName:1, _id:0,})
    res.send({mass:result})
}

const yearbook= async function(req,res){
    let yearlist = await userModel.find({year:1980})
    res.send({mass:yearlist})
}


const pricelist = async function(req,res){
    let x = await userModel.find({ $or: [{ "price.indianPrice": "100" },{ "price.indianPrice": "200" },{"price.indianPrice":"500"}],
});
    res.send({mass:x})

}

const getrandombook =async function(req,res){
    let result = await userModel.find({
        $or:[{stockAvailable:true},{totalPages:{$gt:500}}]
    })

res.send({mass:result})
}


module.exports.createBook=createBook
module.exports.bookAuthor=bookAuthor
module.exports.yearbook=yearbook
module.exports.pricelist=pricelist
module.exports.getrandombook=getrandombook




module.exports.createUser= createUser
module.exports.getUsersData= getUsersData