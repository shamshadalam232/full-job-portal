const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "company"
    },
    title:{
        type:String,
        required:[true, "plzz fill the title"]
    },
    description:{
        type:String,
        required:[true, "plzz fill the description"]
    },
    location:{
        type:String,
        required:[true, "plzz fill the location"]
    },
    workMode:{
        type:String,
        enum: ['Remote','Hybrid','On-site'],
        required:[true, "plzz fill the type"]
    },
    category:{
        type:String,
        required:[true, "plzz fill the category"]
    },
    validDate:{
        type:String,
        required:[true, "plzz fill the validDate"]
    },
    salary:{
        type:Number,
    },
    experience:{
        type:String,
        enum: ['0','0-1','1-2','2-5','5+'],
        required:[true, "plzz fill the experiance"]
    },
    skills:{
        type:Array,
        required:[true, "plzz fill the skills"]
    },
})

const jobModel = mongoose.model("jobModel", jobSchema)
module.exports = jobModel
