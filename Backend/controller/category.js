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


exports.categoryById=(req,res,next,id)=>{
    Category.findById(id).exec((error,category)=>{
        if(error || !category){
            return res.status(400).json({error:"Category not Found"})
        }
        req.category=category
        next();
    })
}


exports.readCategory=(req,res)=>{
    return res.json(req.category)
}

//To Delete Category
exports.deleteCategory=(req,res)=>{
    let category = req.category
    category.remove((error,result)=>{
        if(error || !result){
            return res.status(400).json({error:"Something Went Wrong"})
        }
        res.json({message:"Category Deleted"})
    })
}

//To Update Category

exports.updateCategory=(req,res)=>{
    let category=req.category
    category.category_name=req.body.category

    category.save((error,category)=>{
        if(error || !category){
            return res.status(400).json({error:"Failed to Update Category"})
        }

        res.json({message:"Category Updated Successfully"})
    })
}


//Show Category

exports.findCategory=(req,res)=>{

    Category.find((error,data)=>{
        if (error || !data){
            return res.status(400).json({error:"Category Not Found"})
        }

        res.json(data)
    })
}