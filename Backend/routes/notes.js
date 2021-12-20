const express=require('express')
const pouter=express.Router()

pouter.get('/',(req,res)=>{
    obj={
        a:"thieos",
        b:54
    }
    res.json(obj)


})

module.exports=pouter