const express = require('express');
const router = express.Router();


router.get('/getuser',(req,res,next)=>{
 res.send('success')

})

router.post('/adduser',(req,res,next)=>{
    res.send('success')
   
   })
   
module.exports = router;
