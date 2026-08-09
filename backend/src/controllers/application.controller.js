const application = require("../models/applicationModel")
const company = require("../models/companyModel")
const jobModel = require("../models/jobModel")


const getMyAppliedJobs = async (req, res) => {

    const candidate = req.user.id

    const findApplication = await application.find({candidate}).populate({
     path:'job',
     select: 'title salary location company',
     populate: {
        path: 'company',
        select: 'companyName companyLogo'
     }
    })

    const validApplications = findApplication.filter(
    (item) => item.job !== null
)

    if(findApplication.length === 0){
        return res.status(200).json({message:'No applications found.', validApplications})
    }

    

    return res.status(200).json({message:'your applied job here', validApplications})
}

const getRecruiterjob = async (req, res) => {
  
    const recruiter = req.user.id

    const findCompany = await company.findOne({companyRecruiter:recruiter})

    if(!findCompany){
        return res.status(404).json({message: 'you are not created a company'})
    }

    const jobs = await jobModel.find({
        company:findCompany._id
    })

    if (jobs.length === 0) {
    return res.status(200).json({
        message: "No jobs found.",
        applications: []
    });
    }

    const jobIds = jobs.map(job => job._id)

    const findApplication = await application.find({
        job: {
            $in:jobIds
        }
    }).populate('candidate', 'name email resume phone').populate({
        path: "job",
        select: "title company",
        populate: {
            path: "company",
            select: "companyName companyLogo"
    }
    })

    return res.status(200).json({message:'Recruiter applications fetched successfully.', findApplication})
}

const applicationStatusUpdate = async (req, res) => {

    const applicationId = req.params.id

    const findApplication = await application.findById(applicationId)

    if(!findApplication){
        return res.status(404).json({message:'this application not found'})
    }

    const status = req.body.status

    const validStatus = [
    "Pending",
    "In Progress",
    "Reject"
    ]

    
    if(!validStatus.includes(status)){
         return res.status(400).json({
            message: "Invalid status."
        });
    }

    findApplication.status = status

    await findApplication.save()

    return res.status(200).json({
        message: "Application status updated successfully.",
        application: findApplication
    });
}

    const findaApplication = async (req, res) => {


        const findApplication = await application.findOne({
            candidate: req.user.id,
            job: req.params.id
        })

        return res.status(200).json({applied: !!findApplication})
    }

    const findApplicant = async (req, res) => {

        const find = await application.find({
            job:req.params.id
        }).populate('candidate', 'name email resume phone')

        return res.status(200).json({message:"your applicant", find})
        
    }

module.exports = {getMyAppliedJobs, getRecruiterjob, applicationStatusUpdate, findaApplication, findApplicant}