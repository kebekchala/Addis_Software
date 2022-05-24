
const asyncHandler = require('express-async-handler');
const Employee = require('../models/employeeModel');

//@desc List of Employees
//@route get /api/employee/
//@access private
const getEmployee = asyncHandler(async(req, res) => {
    const emp = await Employee.find();
    res.json(emp);
})

//@desc to register Employees
//@route post /api/employee/register
//@access private
const registerEmployee =asyncHandler( async (req, res) => {
    const {name, dateBirth, gender, salary} = req.body;


    if(!name || !dateBirth || !gender || !salary){
        res.status(400)
        throw new Error("please fill all the data");
    }
    const emp = await Employee.create({
        name,
        dateBirth,
        gender,
        salary
    });
    res.status(200).json(emp);
})

//@desc Update Employee
//@route /api/employee/:id
//@access private
const updateEmployee =asyncHandler(async(req, res) => {

    const empPrev = await Employee.findById(req.params.id);

    if(!empPrev){
        res.status(400);
        throw new Error('Employee is not found');
    }else{
        const {name, dateBirth, gender, salary} = req.body;
        const employeeUpdated = await Employee.findByIdAndUpdate(req.params.id, {name,dateBirth,gender,salary});
        res.json(employeeUpdated);
    }

  
})

//@desc delete Employee
//@route /api/employee/:id
//@access private
const deleteEmployee = asyncHandler( async (req, res) => {
    const empPrev = await Employee.findById(req.params.id);

    if(!empPrev){
        res.status(400);
        throw new Error('Employee is not found');
    }else {
        await Employee.findByIdAndRemove(req.params.id);
        res.json({message: 'employee is delete'});
    }
})
module.exports = {
    getEmployee,
    registerEmployee,
    updateEmployee,
    deleteEmployee
};