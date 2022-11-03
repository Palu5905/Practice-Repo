const mongoose=require('mongoose')


const producatSchema = new mongoose.Schema({
	name:String,
	category:String,
	price:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('product-Data',producatSchema)