const company = require('../models/companyModel')


const companyCreate = async(req, res) => {

    const {companyName, companyLogo, companyWebsite, companyLocation, companyIndustry, companySize, companyFoundedYear, companyDescription, companySocialLinks} = req.body

    const companyRecruiter = req.user.id

    const findCompany = await company.findOne({
        companyName,companyRecruiter
    })

    if(findCompany){
        return res.status(409).json({message:"allready company created"})
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

module.exports = companyCreate