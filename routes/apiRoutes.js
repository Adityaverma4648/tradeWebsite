const express = require("express");
const router = express.Router();
const Trade = require("../model/Trade");

router.post("/", async (req,res)=>{
     const trade = await Trade.find();
     if(trade){
          res.send(trade);
     }else{
          res.status(400);
          throw new Error("CouldNot Fetch"); 
     }
})

router.post("/getData", async (req,res)=>{
     console.log(req.body);
     const { baseUnit, quoteUnit, low ,high,last ,type ,open , volume , sell , buy , at ,name }  = req.body;
  
     const trade = await Trade.create({
          baseUnit,
          quoteUnit,
           low,
           high,
           last,
           type,
           open,
           volume,
           sell,
           buy,
           at,
           name
     })
     if(trade){
           console.log("Saved");
           res.status(200).redirect("index.html");
     }else{
           res.status(400);
           throw new Error();
     }
})





module.exports = router;