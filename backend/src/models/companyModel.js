const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:[true, "company name is required"]
    },
    companyLogo:{
        type:String,
    },
    companyWebsite:{
        type:String,
    },
    companyLocation:{
        type:String,
        required:[true, "company location is required"]
    },
    companyIndustry:{
        type:String,
        required:[true, "company industry is required"]
    },
    companySize:{
        type:String,
        enum: ['1-10','11-50','51-200','201-1000','1000+'],
        required:[true, "company size is required"]
    },
    companyFoundedYear:{
        type:Number,
        required:[true, "company founded year is required"]
    },
    companyDescription:{
        type:String,
        required:[true, "company description year is required"]
    },
    companyRecruiter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    companySocialLinks:{
        type:String,
    },
    },{
   timestamps:true 
})

const company = mongoose.model("company", companySchema)
module.exports = company