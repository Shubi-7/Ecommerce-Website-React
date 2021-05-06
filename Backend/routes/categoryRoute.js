const express=require('express');
const { postCategory } = require('../controller/category');
const router = express.Router();


//Routes

router.post('/postcategory',postCategory);  //To post Category







//Exporting Express Router 
module.exports=router;