const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

//get all employees api
router.get('/', async(req,res) => {
  try{
   const employees = await Employee.find()
   res.json(employees)
  }catch(err){
   res.send('error msg' + err)
  }
})

//create employee POST api
router.post('/',async(req,res) => {
  const employee = new Employee({
   firstname : req.body.firstname,
   lastname: req.body.lastname,
   age: req.body.age
  })
  try{
    const savedEmployee = await employee.save()
    res.status(201).json(savedEmployee)
  }catch(err){
    res.status(500).send('Error' + err)
  }
})

module.exports = router