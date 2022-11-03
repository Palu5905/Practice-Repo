const userAllData =require("../models/userSchema")

const userAPI = async function(req,res){
    const recvid =req.body
    const userRecvdData =await userAllData.create(recvid)
    res.send({mass:userRecvdData})
}


module.exports.userAPI=userAPI;