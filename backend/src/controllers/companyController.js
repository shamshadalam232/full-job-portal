const company = require('../models/companyModel')


const companyCreate = async(req, res) => {

    const {companyName, companyLogo, companyWebsite, companyLocation, companyIndustry, companySize, companyFoundedYear, companyDescription, companySocialLinks} = req.body

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({
        companyName,companyRecruiter
    })

    if(findCompany){
        return res.status(409).json({message:"Allready created company"})
    }

    const createCompany = await company.create({
        companyName,
        companyLogo,
        companyWebsite,
        companyLocation,
        companyIndustry,
        companySize,
        companyFoundedYear,
        companyRecruiter,
        companyDescription,
        companySocialLinks
    })

    return res.status(201).json({message:"company created succesfully", createCompany})
}

const companyFind = async(req, res) => {

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({companyRecruiter})

    if(!findCompany){
        return res.status(200).json({message:"you are not created any company"})
    }

    return res.status(200).json({message:"your company is here", findCompany})
}


const updateCompany = async(req, res) => {

    const companyRecruiter = req.user.id;

    const { companyName,
        companyLogo,
        companyWebsite,
        companyLocation,
        companyIndustry,
        companySize,
        companyFoundedYear,
        companyDescription,
        companySocialLinks
    }  = req.body

    if(req.file){
        req.body.companyLogo = req.file.path
    }

    const findCompanyUpdated = await company.findOneAndUpdate({companyRecruiter:companyRecruiter}, req.body, {new: true})
     console.log("BODY:", req.body)
console.log("FILE:", req.file)
    if(!findCompanyUpdated){
        return res.status(404).json({message:"you are not created company"})
    }

    return res.status(200).json({message:"your company details updated",findCompanyUpdated})
}

const deleteCompany = async (req, res) => {

    const companyRecruiter = req.user.id

    const findAndDelete = await company.findOneAndDelete({companyRecruiter:companyRecruiter})

    if(!findAndDelete){
        return res.status(404).json({message:"you first create company"})
    }

    return res.status(200).json({message: "Company deleted successfully."})

}
module.exports = {companyCreate, companyFind, updateCompany, deleteCompany}