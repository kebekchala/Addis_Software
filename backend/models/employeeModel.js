const mongoose = require('mongoose');
const { defaultConfigStubFile } = require('tailwindcss/lib/constants');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },  
    salary: {
        type: Number ,
        required: true
    }
    
})
const employeModel = mongoose.model('Employee',employeeSchema);
module.exports = employeModel;

