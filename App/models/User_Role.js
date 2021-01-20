const mongoose=require('mongoose')
const Schema=mongoose.Schema


const userschema = new Schema({

  
    

    phone:{type:String,required:true,unique:true},
    role:{type:String,required:true}
           
             

}, {timestamps:true}       )

module.exports=mongoose.model('User_Role',userschema)