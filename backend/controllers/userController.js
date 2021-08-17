const mongoose = require('mongoose');
const {userModel} = require('../models/userModel')
const {generateToken} = require('../utils/generateToken')

const authUser = async(req, res) => {
    const {email, password} = await req.body
      const user = await userModel.findOne({email})
      if(user && (await user.matchPassword(password))){
        res.json({
          _id: user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
          token:generateToken(user._id)
        })
      }else{
        res.status(401).json({error: "product not found"})
       
      }

}

const registerUser = async(req, res) => {
    const {name , email, password} = await req.body
      const userExists = await userModel.findOne({email})
     if(userExists){
       res.status(400).json({error: "User already exists"})
     }

     const user = await userModel.create({name, email, password})

     if(user){
       res.status(200).json({
        _id: user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id)
       })
     }else{
       res.status(400).json({error : "Invalid user data"})
     }
}
const getUserProfile = async(req, res) => {
    const user = await userModel.findById(req.user._id)
      // const user = await userModel.findById(req.user._id)
      
      if(user){
        res.json({
          _id: user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
        })
      }
      res.send("success")

}
module.exports = {authUser,  getUserProfile , registerUser}

