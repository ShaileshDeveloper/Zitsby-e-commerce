const mongoose = require('mongoose');
const {userModel} = require('../models/userModel')

const authUser = async(req, res) => {
    const {email, password} = await req.body
      const user = await userModel.findOne({email})

}
module.exports = {authUser}

