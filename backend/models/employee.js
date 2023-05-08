const mongoose = require('mongoose')

const employee = new mongoose.Schema({
 firstname:{
  type : String,
  required : true
 },
  lastname:{
   type : String,
   required : true
  },
  age:{
   type: Number,
   required: false
  }
})

module.exports = mongoose.model('employees',employee)