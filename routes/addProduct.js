const router = require('express').Router();
const mainModel = require('../models/mainModel');

router.post("/",async(req,res)=>{
  const {name,price,description} = req.body;
  if(!name || !price || !description){
    return res.status(422).send({Error:'All Fields Are Required.'});
  }
  const addNewProuct = new mainModel(req.body);
  try{
    const response = await addNewProuct.save();
    response ? res.send({Message:"Product Added Successfully",response}) :
    res.send({Error:"Something went wrong"});
  }catch(err){
    res.send(err);
    throw err;
  }
})

module.exports=router;