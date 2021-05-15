const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const db = require('./db/database')
const expressValidator = require('express-validator')
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
const cors = require('cors')





const app = express()

//Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(expressValidator());
app.use('/public/uploads', express.static('public/uploads'));
app.use(cors());


//routes
app.use('/api', categoryRoute);
app.use('/api', productRoute);
app.use('/api', userRoute);
app.use('/api', orderRoute);



//PORT Configuration 
const port = process.env.PORT || 5000

//Server 

app.listen(port, () => {
    console.log(`Server Started on PORT ${port}`)
})