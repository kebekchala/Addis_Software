const express = require('express');
const route = express.Router();
const {getEmployee, registerEmployee, updateEmployee, deleteEmployee} = require('../controller/employeeController')

route.get('/',getEmployee);
route.post('/register', registerEmployee);
route.put('/update/:id', updateEmployee);
route.delete('/delete/:id', deleteEmployee);

module.exports = route;
