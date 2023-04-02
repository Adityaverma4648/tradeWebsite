const express = require("express");
const router = express.Router();
const Trade = require("../model/Trade");
const mydata = require("../data/Data.json");

router.post("/", async (req,res)=>{
     const trade = await Trade.find();
     if(trade){
          res.send(trade);
     }else{
          res.status(400);
          throw new Error("CouldNot Fetch"); 
     }
})

router.get("/api",async (req,res)=>{
     mydata.forEach(async (d)=>{
          console.log(JSON.stringify(d));
          // const trade = await Trade.create({
          //      d
          // });
     })
       res.send(mydata);
})

router.post("/getData", async (req,res)=>{
     console.log(req.body);
     const { uid, base_unit, quote_unit, low ,high,last ,type ,open , volume , sell , buy , at ,name }  = req.body;
  
     const trade = await Trade.create({
          uid,
          base_unit,
          quote_unit,
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