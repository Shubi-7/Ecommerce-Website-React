const Category=require('../models/categoryModel')


//To POST OR INSERT Category

exports.postCategory=(req,res)=>{
    let category = new Category({
        category_name:req.body.category_name
    })

    Category.findOne({category_name:category.category_name},(error,data)=>{
        if (data==null){
            category.save((error,category)=>{
                if(error || !category){
                    return res.status(400).json({error:"Something Went Wrong"})
                }
                return res.json({category})
            })
        }
        else{
            res.status(400).json({error:'Category Name Must be Unique'})
        }
    })
}