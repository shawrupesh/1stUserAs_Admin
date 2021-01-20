const mongoose=require('mongoose')
const Schema=mongoose.Schema


const NodeTable = new Schema({

   name:{type:String,required:true},
   email:{type:String,required:true},
    phone:{type:Number,required:true,unique:true},
  
    

})

module.exports=mongoose.model('User',NodeTable)