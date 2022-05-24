const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorHandlerMiddleware');  
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/employee',(require('./routes/employeeRoute')))
app.use(errorHandler);
app.listen(parseInt(port), () => {
    console.log(`server is running on port ${port}`);
});