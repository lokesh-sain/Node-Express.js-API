const router = require('express').Router();
const mainModel = require('../models/mainModel');

router.get("/",async(req,res)=>{
  //using text index, performing search on name & description
  if(req.query.search){
     const searchResult = await mainModel.find({$text:{$search:req.query.search}});
     (searchResult.length>0) ? res.send(searchResult) :
     res.send({Message:"No matches in this criteria."})
     return;
  }
  return res.status(404).send({message:"No value provided."});
})



module.exports=router;