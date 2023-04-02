const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const TradeSchema = new Schema({
  baseUnit: {
    type: String,
    required: true,
  },
  quoteUnit: {
    type: String,
    required: true, 
  },
  low:{
    type : Number,
    required : true,
  },
  high:{
    type : Number,
    required : true,
  },
  last:{
    type : Number,
    required : true,
  },
  type:{
    type : Number,
    required : true,
  },
  open:{
    type : Number,
    required : true,
  },
  volume:{
    type : Number,
    required : true,
  },
  sell:{
    type : Number,
    required : true,
  },
  buy:{
    type : Number,
    required : true,
  },
  at:{
    type : Number,
    required : true,
  }, 
  name:{
    type : String,
    required : true,
  },
},{
  timestamps : true,
})

module.exports = mongoose.model("Trade",TradeSchema);