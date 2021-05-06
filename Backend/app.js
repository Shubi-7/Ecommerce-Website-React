const express = require('express')
require('dotenv').config()
const morgan = require('morgan');
const bodyParser=require('body-parser');
const db = require('./db/database')
const categoryRoute = require('./routes/categoryRoute')





const app = express()

//Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

//routes
app.use('/api',categoryRoute)



//PORT Configuration 
const port = process.env.PORT || 5000

//Server 

app.listen(port,()=>{
    console.log(`Server Started on PORT ${port}`)
})