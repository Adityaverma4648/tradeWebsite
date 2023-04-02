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
    type : Decimal128,
    required : true,
  },
  high:{
    type : Decimal128,
    required : true,
  },
  last:{
    type : Decimal128,
    required : true,
  },
  type:{
    type : Decimal128,
    required : true,
  },
  open:{
    type : Decimal128,
    required : true,
  },
  volume:{
    type : Decimal128,
    required : true,
  },
  sell:{
    type : Decimal128,
    required : true,
  },
  buy:{
    type : Decimal128,
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
})

module.exports = mongoose.model("Trade",TradeSchema);