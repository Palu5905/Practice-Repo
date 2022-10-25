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

/////////////////========================================


const bookList=async function (req,res){
    let recvidData=req.body
    let allSavedata=await UserModel.create(recvidData)
    res.send({massage:allSavedata})
}

const userData=async function (req,res){
    let jio = await UserModel.find()
    res.send({massage:jio})
}

module.exports.bookList=bookList
module.exports.userData=userData




module.exports.createUser= createUser
module.exports.getUsersData= getUsersData