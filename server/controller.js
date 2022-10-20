

const path = require('path')


module.exports={
    getHTML: (req,res)=>{
        rollbar.info("poop")
        res.sendFile(path.join(__dirname, '../public/index.html'))

    }
}