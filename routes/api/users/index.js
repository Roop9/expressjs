const bodyParser = require('body-parser').urlencoded({ extended: true }); 
const express = require('express');
const router = express.Router();


// Create a new Member 

router.post('/auth',bodyParser,(req,res) => {
    if(req.body.username == "test" && req.body.password == "test@123"){
        res.json({is_error:0,msg:'Authentication Successfull'})
    }else{
        res.json({is_error:1,msg:'Invalid Credentials, please try again..'})
    }
})


module.exports = router;