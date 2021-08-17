const mongoose = require('mongoose');
const {userModel} = require('../models/userModel')

const authUser = async(req, res) => {
    const {email, password} = await req.body
      const user = await userModel.findOne({email})
      if(user && (await user.matchPassword(password))){
        res.json({
          _id: user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
          token:null
        })
      }else{
        res.status(401).json({error: "product not found"})
       
      }

}
module.exports = {authUser}

