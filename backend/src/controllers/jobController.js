const jobModel = require('../models/jobModel')
const company = require('../models/companyModel')

const jobCreate = async (req , res) => {

    const {title, description, location, workMode, category, validDate, salary, experience, skills} = req.body

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({
        companyRecruiter
    })

    if(!findCompany){
        return res.status(404).json({message:"Please create a company before posting a job."})
    }

    const findJob = await jobModel.findOne({
        title, category, company:findCompany._id
    })

    if(findJob){
        return res.status(409).json({message:"A similar job has already been posted by your company."})
    }

    const createJob = await jobModel.create({
        company:findCompany._id,
        title,
        description,
        location,
        workMode,
        category,
        validDate,
        salary,
        experience,
        skills
    })

    return res.status(201).json({message:"The job has been created successfully.", createJob})
}

const getMyJob = async(req, res) => {

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({
        companyRecruiter
    })

    if(!findCompany){
        return res.status(404).json({message:"Please create a company before posting a job."})
    }

    const findJobs = await jobModel.find({
        company:findCompany._id
    })

    if(findJobs.length === 0){
        return res.status(404).json({message:"No jobs found for your company."})
    }

    res.status(200).json({message: "Your jobs have been fetched successfully.", findJobs})

}

const getOneJob = async (req, res) => {

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({
        companyRecruiter
    })

    if(!findCompany){
        return res.status(404).json({message:"No company found for this recruiter."})
    }

    const { jobId } = req.params

    const findJob = await jobModel.findOne({
        _id: jobId,
        company: findCompany._id
    })

    if (!findJob) {
    return res.status(404).json({
        message: "Job not found."
    });
    }

    return res.status(200).json({
    message: "Job fetched successfully.",
    findJob
    });
}

const getOneJobUpdate = async (req, res) => {

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({
        companyRecruiter
    })

    if(!findCompany){
        return res.status(404).json({message:"No company found for this recruiter."})
    }

    const { jobId } = req.params

    const findJob = await jobModel.findOne({
        _id: jobId,
        company: findCompany._id
    })

    if (!findJob) {
    return res.status(404).json({
        message: "Job not found."
    });
    }

    const {title, description, location, workMode, category, validDate, salary, experience, skills} = req.body

    const findJobAndUpdate = await jobModel.findOneAndUpdate({_id:jobId}, req.body, {new: true})

    return res.status(200).json({message:"update job detail successfully", findJobAndUpdate})
 
}

const deleteJob = async (req, res) => {

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({
        companyRecruiter
    })

    if(!findCompany){
        return res.status(404).json({message:"No company found for this recruiter."})
    }

    const { jobId } = req.params

    const jobDelete = await jobModel.findOneAndDelete({_id:jobId, company: findCompany._id})

    if(!jobDelete){
        return res.status(404).json({message:"Job not found or you are not authorized to delete it."})
    }

    return res.status(200).json({message: "Job deleted successfully.",jobDelete})
}

module.exports = {jobCreate, getMyJob, getOneJob, getOneJobUpdate, deleteJob}