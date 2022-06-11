const router = require('express').Router();
const mainModel = require('../models/mainModel');

router.get("/getProducts",async(req,res)=>{
   try{
      const fetchRecords = await mainModel.find();
      fetchRecords ? res.send(fetchRecords) : 
      res.send({Error:"Something went wrong"});
      return;
   }catch(err){
      res.send(err);
      throw err;
   }
})

router.get("/getProduct?:id",async(req,res)=>{
   try{
      const productId = req.query.id;
      if(productId){
          const response = await mainModel.findById(productId);
          response ? res.send(response) :
          res.send({"Message":"Product Not Exist"});
         return
      }
      return res.status(404).send({message:"No id provided."});
   }catch(err){
      res.send({"Message":"Product Not Exist"});
   }
})

module.exports=router;