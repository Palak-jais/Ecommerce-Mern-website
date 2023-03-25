const Users= require('../models/userModel')
const authAdmin=async(req,res,next)=>{
 try{
 //get user information by id..
 const user=await Users.findOne({ _id:req.user.id})
 //const user=await Users.findById(req.user._id).forEach(element =>{user.find({user:element._id})}); 

 if(user.role===0)
    return res.status(400).json({msg:"Admin resources access denied"})
 next()

 }
 catch(err){
    return res.status (500).json({msg:err.message})
 }
}
module.exports=authAdmin