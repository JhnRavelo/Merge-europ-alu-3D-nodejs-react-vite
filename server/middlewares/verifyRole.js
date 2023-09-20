const verifyRole = (allowedRole)=>{
return (req, res, next)=>{
    console.log('verify exist');
    if(!req?.role) res.sendStatus(403)

    const result = allowedRole == req.role
    console.log('verify right');
    if(!result) res.sendStatus(403)

    next()
}
}

module.exports = verifyRole