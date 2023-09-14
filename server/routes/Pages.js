const express = require('express')
const router = express.Router()
const { pages } = require('../database/models')

// const session = require('../session/index.js')
// const bodyParser = require('body-parser')

// var jsonParser = bodyParser.json()

// router.use(session())

router.post('/', async (req, res) => {

    const {page} = await req.body
    if(page){
        page.map(async (track)=>{
            const isPage = await pages.findOne({
                where:{
                    page:track,
                }
            })
            if(!isPage){
                pages.create({
                    page:track,
                })
                
            }
            
        })
        res.json('')
        
    }
    
})

module.exports = router