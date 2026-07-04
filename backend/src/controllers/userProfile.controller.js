const user = require('../models/UserModel')

const userProfileId = async(req, res) => {

    const userId = req.user.id 

    const findUser = await user.findById(
        userId
    )

    return res.status(200).json({
        message:"User your data here", findUser
      })
}


const updateProfile = async (req,res) => {
     const userId = req.user.id

     const {profilePhoto, resume, phone, location, skills, bio, education, experience} = req.body;

     const findUser = await user.findByIdAndUpdate(userId, req.body,{ new: true})

     return res.status(200).json({message:"succesfully profile updated", findUser})

}

module.exports = {userProfileId, updateProfile}