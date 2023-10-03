const verifyRole = (allowedRole)=>{
return (req, res, next)=>{
    
    if(!req?.role) res.sendStatus(403)
    console.log(req.role);
    const result = allowedRole == req.role
    if(!result) res.sendStatus(403)
    console.log('verify right');

    next()
}
}

module.exports = verifyRole