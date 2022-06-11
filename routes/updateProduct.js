const router = require('express').Router();
const mainModel = require('../models/mainModel');

router.post("/",async(req,res)=>{
    const {name,price,description,_id} = req.body;
    if(!name || !price || !description || !_id){
        return res.status(422).send({Error:'All Fields Are Required.'});
    }
    try{
        const fetchedRecord = await mainModel.findById(_id);
        if(!fetchedRecord){
            return res.send(404).send({message:"Not data exist associated with this id"});
        }else{
            fetchedRecord.name = name;
            fetchedRecord.price = price;
            fetchedRecord.description = description;

            const updateProduct = await fetchedRecord.save();
            return res.send({message:'Record Updated',updateProduct});
        }
    }catch(err){
        return res.send(err);
    }
})

//Using patch
/*router.patch("/updateProduct",async(req,res)=>{
    const {name,price,description,_id} = req.body;
    if(!name || !price || !description || !_id){
        return res.status(422).send({Error:'All Fields Are Required.'});
    } 
    try{
        const updateResult = await modelCollection.findByIdAndUpdate(_id,req.body);
        res.send(updateResult);
    }catch(err){
       res.status(400).send({message:"error"});
    }
});
*/
module.exports=router;