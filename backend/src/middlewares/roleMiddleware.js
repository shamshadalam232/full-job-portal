const roleMiddleware = async(req, res, next) => {

    if(req.user.role !== "recruiter"){
        return res.status(403).json({message:"Access denied"})
    }

    next()
}

module.exports = roleMiddleware