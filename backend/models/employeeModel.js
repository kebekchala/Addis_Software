const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data_birth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: Double,
        required: true
    }
})
const employeModel = mongoose.Model('Employee',employeeSchema);
module.exports = employeModel;

