const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        lowercase: true,
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required: [true, 'Password is require'],
        minlength: 6
    },
    role:{
        type: String,
        enum:["jobSeeker", "recruiter"],
        required: true
    },
    profilePhoto:{
        type:String,
    },
    resume:{
        type:String,
    },
    phone:{
        type:String,
    },
    location:{
        type:String,
    },
    skills:{
        type:Array,
    },
    bio:{
        type:String,
    },
    education:{
        type:String,
    },
    experience:{
        type:String,
    }
},{
   timestamps:true 
})

const user = mongoose.model('user', userSchema)
module.exports = user