const express=require('express');
const { postCategory, findCategory } = require('../controller/category');
const router = express.Router();


//Routes

router.post('/postcategory',postCategory);  //To post Category

router.get('/showcategory',findCategory)  //To Show All Categories







//Exporting Express Router 
module.exports=router;