const roleMiddleware2 = async(req, res, next) => {

    if(req.user.role !== "jobSeeker"){
        return res.status(403).json({message:"Access denied"})
    }

    next()
}

module.exports = roleMiddleware2