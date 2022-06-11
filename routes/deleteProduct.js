const router = require('express').Router();
const mainModel = require('../models/mainModel');

router.delete("/",async(req,res)=>{
   if(req.query.id){
        try{
            const response = await mainModel.findByIdAndDelete(req.query.id);
            (!response)? res.send({Message:"Something went wrong"}) :
            res.send({message:"Product delete successfully",response});
            return;
        }catch(err){
            return res.send("Message:Invalid id");
        }
    }
    return res.send(404).send({message:"Please provide id."});
})


module.exports=router;