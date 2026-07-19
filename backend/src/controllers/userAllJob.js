const application = require("../models/applicationModel");
const company = require("../models/companyModel");
const jobModel = require("../models/jobModel")


const getAllJobs = async (req, res) => {

    const currentDate = new Date();

    const allJob = await jobModel.find({
        validDate : {$gte : currentDate}
    }).sort({createdAt: -1}).populate("company", "companyName companyLogo companyLocation")

    if(allJob.length === 0){
        return res.status(404).json({message: 'There are no active jobs available at the moment.'})
    } 

    return res.status(200).json({message:"All jobs retrieved successfully.", allJob})
}

const getSingleJob = async (req, res) => {

    const {id} = req.params

    const singleJob = await jobModel.findById(id).populate("company", "companyName companyLogo companyLocation")
    
    if(!singleJob){
        return res.status(404).json({message:"The requested job was not found."})
    }

    return res.status(200).json({message:"Job fetched successfully.",singleJob})
}

const applyJob = async (req, res) => {

    const {id} = req.params

    const candidate = req.user.id

    const findJob = await jobModel.findById(id)

    if(!findJob){
        return res.status(404).json({message:"job not exists."})
    }

    const currentDate = new Date();

    if (findJob.validDate < currentDate) {
    return res.status(400).json({
        message: "This job is no longer accepting applications."
    });
    }

    const findApplication = await application.findOne({
        candidate: req.user.id,
        job:id
    })

    if(findApplication){
        return res.status(400).json({
            message:'You have already applied for this job.'
        })
    }

    const applicationCreate = await application.create({
        candidate,
        job:id
    })

    return res.status(201).json({
        message:"your application succesfuly submited.", applicationCreate
    })

}

module.exports = {getAllJobs, getSingleJob, applyJob}