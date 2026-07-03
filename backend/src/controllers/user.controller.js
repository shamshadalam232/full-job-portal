const user = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const register = async (req, res) => {
    const {name, email, password, role} = req.body

    const allReadyExists = await user.findOne({
        $or:[
            {name:name},
            {email:email}
        ]
    })

    if(allReadyExists){
      return res.status(404).json({
        message:"User allReady register plzz login"
      })
    }

    const User = await user.create({
        name,
        email,
        password,
        role
    })

    const token = jwt.sign({id:user._id,
        name:user.name
    },process.env.SECRET_KEY,{expiresIn:"3d"})
    res.cookie("token", token)
    res.status(201).json({message:"user registration successfully",
        User
    })
}