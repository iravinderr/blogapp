const blogDB = require('../models/blogDB');
// const blogDB2 = require('../models/blogDB');

exports.createBlog = async(req, res) => {
    try{
        // extracting blog's title and content from the request body
        const {title, content} = req.body;

        // creating entry in the database
        const blog = await blogDB.create({title, content});

        // sending json response with the success flag
        res.status(200).json({
            success: true,
            data: blog,
            message: "Post created successfully"
        });
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        })
    }
}

exports.getBlog = async(req, res) => {
    try{
        // fetching id from the request parameters
        const {id} = req.params;

        // retrieving the blog from the database
        const blog = await blogDB.findById({_id: id});

        if(!blog){
            res.status(404).json({
                success: false,
                message: `No blog with id ${id} is found in the database`,
            })
        }
        else{
            res.status(200).json({
                success: true,
                data: blog,
                message: "Blog retrieved successfully",
            })
        }
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        })
    }
}