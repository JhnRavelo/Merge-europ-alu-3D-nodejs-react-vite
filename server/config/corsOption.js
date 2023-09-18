const whiteList = require('./whiteList')

const corsOption = {
    origin: (origin, callback)=>{
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else {
            callback(new Error('Pas permit par cors'))
        }
    },
    OptionSuccessStatus: 200
}

module.exports = corsOption