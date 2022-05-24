
const asyncHandler = require('express-async-handler');
const Employee = require('../models/employeeModel');


const getEmployee = asyncHandler(async(req, res) => {
    res.json({message: 'List of Employee'});
})

const registerEmployee =asyncHandler( async (req, res) => {
    const [name, dateBirth, gender, salery] = req.body;
    if(!name || !dateBirth || !gender || !salery){
        res.status(400)
        throw new Error('Please add  all the File')
    }
    res.json({message: 'register Employee'});
})

const updateEmployee =asyncHandler(async(req, res) => {
    console.log(`employee id ${req.params.id}`)
    res.json({message: 'update Employee'});
})

const deleteEmployee = asyncHandler( async (req, res) => {
    console.log(`employee id ${req.params.id}`)
    res.json({message: 'delete Employee'});
})
module.exports = {
    getEmployee,
    registerEmployee,
    updateEmployee,
    deleteEmployee
};