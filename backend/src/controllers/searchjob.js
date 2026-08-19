const jobModel = require("../models/jobModel")


const searchProduct = async (req, res) => {
    const search = req.query.search
    console.log(req.query.search)

    const product = await jobModel.find({title: new RegExp(search, 'i')}).populate("company", "companyName companyLogo companyLocation")

    if(product.length == 0){
        return res.status(400).json({message:'enter proper Search'})
    }

    return res.status(200).json(product)
}

module.exports = searchProduct