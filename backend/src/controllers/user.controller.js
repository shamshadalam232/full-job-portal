const user = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const register = async (req, res) => {
    const {name, email, password, role} = req.body

    const allReadyExists = await user.findOne({
        $or:[
            {email:email}
        ]
    })

    if(allReadyExists){
      return res.status(400).json({
        message:"User allReady register plzz login"
      })
    }

     if (!password) {
       return res.status(400).json({message:"plz enter your password"})
    }

    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds)


    const newUser = await user.create({
        name,
        email,
        password:hashedPassword,
        role
    })

   
    const token = jwt.sign({id:newUser._id,
        name:newUser.name
    },process.env.SECRET_KEY,{expiresIn:"3d"})
    res.cookie("token", token)
    res.status(201).json({message:"user registration successfully",
        newUser
    })
}

const login = async(req, res) => {
    const {email, password} = req.body

    const loginUser = await user.findOne({
        $or:[
            {email:email}
        ]
    })

    if(!loginUser){
        return res.status(400).json({message:"User not found plzz register"})
    }

    const passwordCompare = await bcrypt.compare(password,loginUser.password)

    if(!passwordCompare){
        return res.status(400).json({message:"password wrong"})
    }

    const token = jwt.sign({
        id:loginUser._id,
        email:loginUser.email
    }, process.env.SECRET_KEY,{expiresIn:"3d"})

    res.cookie("token", token)

    res.status(200).json({message:"User login succesfully", loginUser})
}

module.exports = {register, login}