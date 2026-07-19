const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    candidate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"jobModel"
    },
    status:{
        type:String,
        enum:['Pending','In Progress','Reject'],
        default: "Pending"
    },
    },{
        timestamps:true
})

const application = mongoose.model('application', applicationSchema);

module.exports = application