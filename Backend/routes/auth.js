const express=require('express')
const User = require('../modules/Users')
const router=express.Router()
const { body,validationResult}=require('express-validator')


//create user using: POST "/api/auth/". Doesn' require Auth
router.post('/',
    body('name','Enter a valid Name').isLength({min:4}),
    body('password','Enter a valid Password').isLength({min:5}),
    body('email','Enter a valid Email').isEmail()
    ,(req,res)=>{
   
      
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // console.log(req.body)
    // res.send(req.body)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err)
        res.json({error:"Please Enter a Unique Value"})});
    
 

})

module.exports=router;